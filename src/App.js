import { use } from "i18next";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import i18n from "./i18n";

function App() {
  document.body.style.direction = window.localStorage.getItem("dir");

  if (window.localStorage.getItem("i18nextLng") === null) {
    window.localStorage.setItem("i18nextLng", "ar");
    window.localStorage.setItem("dir", "rtl");
  }
  if (window.localStorage.getItem("i18nextLng") === "ar") {
    window.localStorage.setItem("dir", "rtl");
  }

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
