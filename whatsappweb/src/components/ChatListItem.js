import React, { useEffect, useState } from "react";

import "./ChatListItem.css";

function ChatListItem({ onClick, active, data }) {
   const [time, setTime] = useState("");

   useEffect(() => {
      if (data.lastMessageDate > 0) {
         let d = new Date(data.lastMessageDate.seconds * 1000);
         let hours = d.getHours();
         let minutes = d.getMinutes();
         minutes = minutes < 10 ? "0" + minutes : minutes;
         hours = hours < 10 ? "0" + hours : hours;
         setTime(`${hours}:${minutes}`);
      }
   }, [data]);

   return (
      <div
         className={`chat-list-item ${active ? "active" : ""}`}
         onClick={() => onClick()}
      >
         <img className="chat-avatar" src={data.img} alt="" />
         <div className="chat-list-lines">
            <div className="chat-list-line">
               <div className="chat-name">{data.title}</div>
               <div className="chat-date">{time}</div>
            </div>

            <div className="chat-list-line">
               <div className="chat-last-message">
                  <p>{data.lastMessage}</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ChatListItem;
