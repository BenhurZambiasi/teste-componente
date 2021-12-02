import React, { useEffect, useState } from "react";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

import { connection as Api } from "./api";

import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";

import "./App.css";
import NewChat from "./components/NewChat";
import Login from "./components/Login";

function App() {
   const [user, setUser] = useState({
      id: "AVLwPJr85FT8aQTVbxgX3oP6MMO2",
      name: "Benhur",
      avatar: "https://graph.facebook.com/4042150532510844/picture",
   });

   const [chatList, setChatList] = useState([]);

   const [activeChat, setActiveChat] = useState({});
   const [showNewChat, setShowNewChat] = useState(false);

   async function handleLoginData(u) {
      let newUser = {
         id: u.uid,
         name: u.displayName,
         avatar: u.photoURL,
      };
      await Api.addUser(newUser);

      setUser(newUser);
   }

   useEffect(() => {
      if (user !== null) {
         let unsub = Api.onChatList(user.id, setChatList);
         return unsub;
      }
   }, []);

   if (user === null) {
      return <Login onReceive={handleLoginData} />;
   }

   const getBase64FromUrl = async (file?) => {
      const data = await fetch(
         "https://www.hypeness.com.br/1/2018/12/imagens-surreais14.jpg"
      );
      const blob = await data.blob();
      return new Promise((resolve) => {
         const reader = new FileReader();
         reader.readAsDataURL(blob);
         reader.onloadend = () => {
            const base64data = reader.result;

            let result: string = String(base64data);
            let downloadLink = document.createElement("a");
            downloadLink.href = result;
            downloadLink.download = file.name ? file.name : "teste";
            downloadLink.click();
            resolve(base64data);
         };
      });
   };

   return (
      <div className="App">
         <div className="sidebar">
            <NewChat
               chatList={chatList}
               user={user}
               show={showNewChat}
               setShow={setShowNewChat}
            />
            <header>
               <img src={user.avatar} alt="avatar" className="header-avatar" />
               <p>{user.name}</p>
               <div className="header-buttons">
                  <div className="header-btn">
                     <DonutLargeIcon style={{ color: "#919191" }} />
                  </div>
                  <div
                     className="header-btn"
                     onClick={() => setShowNewChat(true)}
                  >
                     <ChatIcon style={{ color: "#919191" }} />
                  </div>
                  <div className="header-btn" onClick={getBase64FromUrl}>
                     <MoreVertIcon style={{ color: "#f25" }} />
                  </div>
               </div>
            </header>

            <div className="search">
               <div className="search-input">
                  <SearchIcon style={{ color: "#919191" }} fontSize="small" />
                  <input
                     type="search"
                     placeholder="Procurar ou começar uma nova conversa"
                  />
               </div>
            </div>

            <div className="chat-list">
               {chatList.map((item, key) => {
                  return (
                     <ChatListItem
                        key={key}
                        active={activeChat.chatId === chatList[key].chatId}
                        onClick={() => setActiveChat(chatList[key])}
                        data={item}
                     />
                  );
               })}
            </div>
         </div>
         <div className="content-area">
            {activeChat.chatId ? (
               <ChatWindow data={activeChat} user={user} />
            ) : (
               <ChatIntro />
            )}
         </div>
      </div>
   );
}

export default App;
