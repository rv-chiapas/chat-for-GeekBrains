import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


const Message = (props) => {
  return (
    <div>
      <h1 class="heading">{props.text}</h1>
      <p class="paragraph">{props.paragr}</p>
    </div>
  );
};

const App = () => {
 return  (
      <Message />
  )};

ReactDOM.render(
  <React.StrictMode> 
    <Message text="Здесь мы будем создавать чат!" paragr='Чат создаём в рамках изучения библиотеки React' />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
