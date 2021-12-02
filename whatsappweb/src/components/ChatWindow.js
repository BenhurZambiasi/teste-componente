import React, { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";

import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";

import { connection as Api } from "../api";

import MessageItem from "./MessageItem";

import "./ChatWindow.css";

function ChatWindow({ data, user }) {
   const body = useRef();
   let recognition = null;
   let SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

   if (SpeechRecognition !== undefined) {
      recognition = new SpeechRecognition();
   }

   const [text, setText] = useState("");
   const [emojiOpen, setEmojiOpen] = useState(false);
   const [listening, setListening] = useState(false);
   const [list, setList] = useState([]);
   const [users, setUsers] = useState([]);

   function handleEmojiClick(e, emojiObject) {
      setText(text + emojiObject.emoji);
   }

   function handleMicClick() {
      if (recognition !== null) {
         recognition.onstart = () => {
            setListening(true);
         };
         recognition.onend = () => {
            setListening(false);
         };
         recognition.onresult = (e) => {
            setText(e.results[0][0].transcript);
         };
         recognition.start();
      }
   }

   function handleInputkeyUp(keyCode) {
      if (keyCode === 13) {
         handleSendClick();
      }
   }

   function handleSendClick() {
      if (text !== "") {
         Api.sendMesage(data, user.id, "text", text, users);
         setText("");
         setEmojiOpen(false);
      }
   }

   useEffect(() => {
      if (body.current.scrollHeight > body.current.offsetHeight) {
         body.current.scrollTop =
            body.current.scrollHeight - body.current.offsetHeight;
      }
   }, [list]);

   useEffect(() => {
      setList([]);
      let unsub = Api.onchatContent(data.chatId, setList, setUsers);
      return unsub;
   }, [data.chatId]);

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
   useEffect(() => {
      getBase64FromUrl();
   }, []);

   return (
      <div className="chtWindow">
         <div className="chtWindow-header">
            <div className="chtWindow-headerInfo">
               <img className="chtWindow-avatar" src={data.img} alt="" />
               <div className="chtWindow-name">{data.title}</div>
            </div>

            <div className="chtWindow-headerbtns">
               <div className="chtWindow-btn">
                  <SearchIcon style={{ color: "#919191" }} />
               </div>
               <div className="chtWindow-btn">
                  <AttachFileIcon style={{ color: "#919191" }} />
               </div>
               <div className="chtWindow-btn">
                  <MoreVertIcon style={{ color: "#f25" }} />
               </div>
            </div>
         </div>

         <div ref={body} className="chtWindow-body">
            {list.map((item, key) => (
               <MessageItem key={key} data={item} user={user} />
            ))}
         </div>

         <div
            className="cthWindow-emoji-area"
            style={{ height: emojiOpen ? "200px" : "0" }}
         >
            <EmojiPicker
               disableSearchBar
               disableSkinTonePicker
               onEmojiClick={handleEmojiClick}
            />
         </div>

         <div className="chtWindow-footer">
            <div className="cthWindow-pre">
               <div
                  className="chtWindow-btn"
                  onClick={() => setEmojiOpen(false)}
                  style={{ width: emojiOpen ? "40px" : "0" }}
               >
                  <CloseIcon style={{ color: "#919191" }} />
               </div>
               <div
                  className="chtWindow-btn"
                  onClick={() => setEmojiOpen(true)}
               >
                  <InsertEmoticonIcon
                     style={{ color: emojiOpen ? "#009688" : "#919191" }}
                  />
               </div>
            </div>

            <div className="cthWindow-input-area">
               <input
                  type="text"
                  className="cthWindow-input"
                  placeholder="Digite uma menssagem"
                  value={text}
                  onChange={({ target }) => setText(target.value)}
                  onKeyUp={({ keyCode }) => handleInputkeyUp(keyCode)}
               />
            </div>

            <div className="cthWindow-pos">
               {text === "" && (
                  <div className="chtWindow-btn" onClick={handleMicClick}>
                     <MicIcon
                        style={{ color: listening ? "#126e6e" : "#919191" }}
                     />
                  </div>
               )}

               {text !== "" && (
                  <div
                     className="chtWindow-btn"
                     onClick={() => handleSendClick()}
                  >
                     <SendIcon style={{ color: "#919191" }} />
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}

export default ChatWindow;
