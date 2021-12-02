import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-firestore";

import firebaseConfig from "./firebase.config";

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export const connection = {
  addUser: async (user) => {
    await db.collection("users").doc(user._id).set(
      {
        name: user.firstname,
        avatar: user.avatar,
      },
      {
        merge: true,
      }
    );
  },

  getContactList: async (userId) => {
    let list = [];
    let results = await db.collection("users").get();
    results.forEach((result) => {
      let data = result.data();
      if (result.id !== userId) {
        list.push({
          id: result.id,
          name: data.name,
          avatar: data.avatar,
        });
      }
    });
    return list;
  },

  addNewChat: async (user, user2) => {
    let newChat = await db.collection("chats").add({
      messages: [],
      users: [user._id, user2.id],
    });
    db.collection("users")
      .doc(user._id)
      .update({
        chats: firebase.firestore.FieldValue.arrayUnion({
          chatId: newChat.id,
          title: user2.name,
          img: user2.avatar,
          with: user2.id,
        }),
      });
    db.collection("users")
      .doc(user2.id)
      .update({
        chats: firebase.firestore.FieldValue.arrayUnion({
          chatId: newChat.id,
          title: user.firstname,
          img: user.avatar,
          with: user._id,
        }),
      });
  },

  onChatList: (userId, setChatList) => {
    return db
      .collection("users")
      .doc(userId)
      .onSnapshot((doc) => {
        if (doc.exists) {
          let data = doc.data();

          if (data.chats) {
            let chats = [...data.chats];

            // eslint-disable-next-line array-callback-return
            chats.sort((a, b) => {
              console.log(a);
              if (a.lastMessageDate.seconds === undefined) {
                return -1;
              }

              if (a.lastMessageDate.seconds < b.lastMessageDate.seconds) {
                return 1;
              }
            });
            setChatList(chats);
          }
        }
      });
  },

  onchatContent: (chatId, setlist, setUsers) => {
    return db
      .collection("chats")
      .doc(chatId)
      .onSnapshot((doc) => {
        if (doc.exists) {
          let data = doc.data();
          setlist(data.messages);
          setUsers(data.users);
        }
      });
  },

  sendMesage: async (chatData, userId, type, body, users) => {
    let now = new Date();

    db.collection("chats")
      .doc(chatData.chatId)
      .update({
        messages: firebase.firestore.FieldValue.arrayUnion({
          type,
          author: userId,
          body,
          date: now,
        }),
      });

    for (let i in users) {
      let u = await db.collection("users").doc(users[i]).get();
      let uData = u.data();
      if (uData.chats) {
        let chats = [...uData.chats];
        for (let e in chats) {
          if (chats[e].chatId === chatData.chatId) {
            chats[e].lastMessage = body;
            chats[e].lastMessageDate = now;
          }
        }
        await db.collection("users").doc(users[i]).update({
          chats,
        });
      }
    }
  },
};
