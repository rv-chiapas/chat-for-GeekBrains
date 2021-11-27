import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useState } from "react/cjs/react.development";
import "./index.css";

const Message = (props) => {
  return (
    <div>
      <h1 className="heading">{props.text}</h1>
      <p className="paragraph">{props.paragr}</p>
    </div>
  );
};

const App = () => {
  const [messages, setMessageList] = useState([]);
  const [value, setInputValue] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];

    if (messages.length && lastMessage.author !== "Chat-bot") {
      setTimeout(() => {
        setMessageList([
          ...messages,
          { author: "Chat-bot", message: "Привет от чат-бота!" },
        ]);
      }, 750);
    }
  }, [messages]);

  useEffect(() => {
    ref.current.focus();
  }, []);

  // const ClassName = (className) => {
  //   if(setMessageList.author === "User") {
  //       className = "user"
  //   } else {
  //     className = "chat-bot"
  //   }
  // }

  return (
    <div>
      {messages.map((message) => (
        <div>
          <div className={message.author}>
            {message.author}:
            <br /> {message.message}
          </div>
        </div>
      ))}

      <input
        className="input"
        ref={ref}
        placeholder="Введите ваше сообщение"
        value={value}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button
        className="button"
        onClick={() => {
          setMessageList([...messages, { author: "User", message: value }]);
          setInputValue("");
        }}
      >
        Send
      </button>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Message
      text="Здесь мы будем создавать чат!"
      paragr="Чат создаём в рамках изучения библиотеки React"
    />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
