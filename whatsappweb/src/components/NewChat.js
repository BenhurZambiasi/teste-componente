import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { connection as Api } from "../api";
import "./NewChat.css";

function NewChat({ user, chatList, show, setShow }) {
   const [list, setList] = useState([]);

   async function getList() {
      if (user !== null) {
         let res = await Api.getContactList(user.id);
         setList(res);
      }
   }

   useEffect(() => {
      getList();
   }, []);

   async function addNewChat(user2) {
      await Api.addNewChat(user, user2);
      setShow(false);
   }

   return (
      <div className="newChat" style={{ left: show ? 0 : -415 }}>
         <div className="newCth-head">
            <div className="newcth-backbutton" onClick={() => setShow(false)}>
               <ArrowBackIcon style={{ color: "#fff" }} />
            </div>
            <div className="newcth-headTitle">Nova Conversa</div>
         </div>
         <div className="newCth-list">
            {list.map((item, key) => (
               <div
                  className="newCth-item"
                  key={key}
                  onClick={() => addNewChat(item)}
               >
                  <img
                     className="newCth-itemAvatar"
                     src={item.avatar}
                     alt="avatar"
                  />
                  <div className="newCth-itemName">{item.name}</div>
               </div>
            ))}
         </div>
      </div>
   );
}

export default NewChat;
