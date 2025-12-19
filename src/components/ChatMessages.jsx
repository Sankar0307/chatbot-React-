import { useRef , useEffect } from "react";
import { ChatMessage } from "./ChatMessage";

export function ChatMessages({chatMessages}){
        const chatMessagsRef=useRef(null);


        useEffect(()=>{
            const containerElem=chatMessagsRef.current;
            if(containerElem){
              containerElem.scrollTop=containerElem.scrollHeight;
            }
        } , [chatMessages]);

         return (
        <div className="chat-message-container"
        ref={chatMessagsRef}>
          {chatMessages.map((chatMessage) =>{
            return(
              <ChatMessage
              message={chatMessage.message}
              sender={chatMessage.sender}
              key={chatMessage.id}
              />
            );
          })}
        </div>
);
    }