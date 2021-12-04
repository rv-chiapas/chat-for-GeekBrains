import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import App from './App';

const Message = (props) => {
  return (
    <div>
      <h1 className="heading">{props.text}</h1>
      <p className="paragraph">{props.paragr}</p>
    </div>
  );
};

const theme = createTheme({});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Message
        text="Здесь мы будем создавать чат!"
        paragr="Чат создаём в рамках изучения библиотеки React"
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
