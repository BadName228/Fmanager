import React from "react";

// CSS
import "./styleForMainPage.css";

function HeaderInformation() {
  return (
    <div className="headerInformation">
      <div className="name">Имя</div>
      <div className="dle">Дата редактирования</div>
      <div className="type">Тип</div>
      <div className="size">Размер</div>
    </div>
  );
}

export default HeaderInformation;
