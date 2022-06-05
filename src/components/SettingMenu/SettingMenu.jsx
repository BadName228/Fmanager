import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// CSS
import "./Style.css";

// Icons
import {
  FaEye,
  FaInfo,
  FaSave,
  FaFileMedical,
  FaFolderPlus,
  FaCog,
  FaQuestion,
  FaSearch,
} from "react-icons/fa";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

function SettingMenu(props) {
  //
  function addNewFolder() {
    let folder = prompt("Введите название папки");
    if (window.location.pathname == "/") {
      props.File.store.push({
        type: "folder",
        name: folder,
        content: [],
        getSize: 35,
        newName: function (name) {
          this.name = name;
        },
        addNewFile: function (fileName, fileType, content) {
          this.content.push({
            type: fileType,
            name: fileName,
            content: [content],
            getSize: 35,
            newName: function (name) {
              this.name = name;
            },
          });
        },
        dateLastEditing: "29.07.2017 22:22",
        newDateLastEditing() {
          let today = new Date();
          let current_date = today.getDate();
          let current_month = today.getMonth() + 1;
          let current_year = today.getFullYear();
          let current_hours = today.getHours();
          let current_minute = today.getMinutes();
          this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
        },
      });
    } else {
      props.File.store.map((e) => {
        if (e.type == "folder" && e.name == window.location.pathname.slice(1)) {
          e.content.push({
            type: "folder",
            name: folder,
            content: [],
            getSize: 35,
            newName: function (name) {
              this.name = name;
            },
            addNewFile: function (fileName, fileType, content) {
              this.content.push({
                type: fileType,
                name: fileName,
                content: [content],
                getSize: 35,
                newName: function (name) {
                  this.name = name;
                },
              });
            },
            dateLastEditing: "29.07.2017 22:22",
            newDateLastEditing() {
              let today = new Date();
              let current_date = today.getDate();
              let current_month = today.getMonth() + 1;
              let current_year = today.getFullYear();
              let current_hours = today.getHours();
              let current_minute = today.getMinutes();
              this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
            },
          });
        }
      });
    }
  }
  function addNewFile() {
    let file = prompt("Введите название нового файла");
    if (window.location.pathname == "/") {
      props.File.store.push({
        type: "txt",
        name: file,
        content: [],
        getSize: 35,
        newName: function (name) {
          this.name = name;
        },
        dateLastEditing: "29.07.2017 22:22",
        newDateLastEditing() {
          let today = new Date();
          let current_date = today.getDate();
          let current_month = today.getMonth() + 1;
          let current_year = today.getFullYear();
          let current_hours = today.getHours();
          let current_minute = today.getMinutes();
          this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
        },
      });
    } else {
      props.File.store.map((e) => {
        if (e.type == "folder" && e.name == window.location.pathname.slice(1)) {
          e.content.push({
            type: "txt",
            name: file,
            content: [],
            getSize: 35,
            newName: function (name) {
              this.name = name;
            },
            dateLastEditing: "29.07.2017 22:22",
            newDateLastEditing() {
              let today = new Date();
              let current_date = today.getDate();
              let current_month = today.getMonth() + 1;
              let current_year = today.getFullYear();
              let current_hours = today.getHours();
              let current_minute = today.getMinutes();
              this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
            },
          });
        }
      });
    }
  }

  //
  return (
    <div className="SettinMenuMainPage">
      <div className="SettinMenuPanel">
        <div className="firsPanel">
          <button className="StrelkaForward">
            <NavLink to="/">
              <IoMdArrowRoundBack />
            </NavLink>
          </button>
          <button className="StrelkaBack" disabled>
            <IoMdArrowRoundForward />
          </button>
        </div>
        <div className="SecondPanel">
          <button className="addCard" onClick={addNewFolder}>
            <FaFolderPlus />
          </button>
          <button className="addFile" onClick={addNewFile}>
            <FaFileMedical />
          </button>
          <button className="save" disabled>
            <FaSave />
          </button>
        </div>
        <div className="threePanel">
          <button className="cheked" disabled>
            <FaEye />
          </button>
          <button className="info" disabled>
            <FaInfo />
          </button>
        </div>
        <div className="fourPanel">
          <button className="setting" disabled>
            <FaCog />
          </button>
          <button className="questions" disabled>
            <FaQuestion />
          </button>
        </div>
        <div className="Searchpanel">
          <button className="search" disabled>
            <FaSearch />
          </button>
          <input className="searchInput"></input>
        </div>
      </div>
    </div>
  );
}

export default SettingMenu;
