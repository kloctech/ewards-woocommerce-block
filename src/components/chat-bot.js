import React, { useEffect, useState } from "react";
import "../styles/main.scss"
import Requestotp from "./requestotp";


const Chatbot = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sizeIncreased,setSizeIncreased]=useState(false)

  return (
    <div>
      {isOpen && (
        <div className={`chatbotCard increase ${sizeIncreased && "increase1"}`}>
          <div className="chatbotHeader">
            <div style={{ display: "flex" }}>
            </div>
            <div style={{ display: "flex" }}>
              <button
                onClick={() => setSizeIncreased(!sizeIncreased)}
              >
               +
              </button>
            
            </div>
          </div>       
        <Requestotp/>
        </div>
      )}
      <button
      className={`chatBotButton ${isOpen ? "hideButton" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/Google_Messages_icon_%282022%29.svg"/>: <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/Google_Messages_icon_%282022%29.svg"/> }
      </button>
    </div>
  );
};

export default Chatbot;
