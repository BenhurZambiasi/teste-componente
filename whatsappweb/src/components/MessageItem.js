import React, { useState, useEffect } from "react";

import "./MessageItem.css";

function MessageItem({ data, user }) {
   const [time, setTime] = useState("");

   useEffect(() => {
      if (data.date > 0) {
         let d = new Date(data.date.seconds * 1000);
         let hours = d.getHours();
         let minutes = d.getMinutes();
         minutes = minutes < 10 ? "0" + minutes : minutes;
         hours = hours < 10 ? "0" + hours : hours;
         setTime(`${hours}:${minutes}`);
      }
   }, [data]);

   return (
      <div
         className="msgLine"
         style={{
            justifyContent: user.id === data.author ? "flex-end" : "flex-start",
         }}
      >
         <div
            className="msgItem"
            style={{
               backgroundColor: user.id === data.author ? "#dcf8c6" : "#fff",
            }}
         >
            <div className="msgText">{data.body}</div>
            <div className="msgDate">{time}</div>
         </div>
      </div>
   );
}

export default MessageItem;
