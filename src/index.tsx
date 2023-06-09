import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Calendar from "./components/Calendar";
import { RecoilRoot } from "recoil";
import TodoFormModal from "./features/TodoFormModal";
import TodoStatisticsModal from "./features/TodoStatisticsModal";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Calendar />
      <TodoFormModal />
      <TodoStatisticsModal />
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
