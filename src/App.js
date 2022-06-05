import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

// Components
import SettingMenu from "./components/SettingMenu/SettingMenu";
import Sidebar from "./components/Sidebar/Sidebar";
import Mainpage from "./components/Mainpage/Mainpage";
import Footer from "./components/Footer/Footer";

// CSS
import "./App.css";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="headerAPP">
          <p>Файловый менеджер</p>
        </header>
        <SettingMenu File={props} />
        <div className="mainPage">
          <Sidebar files={props} />
          <Mainpage fileForMainpage={props} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
