import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "./../../../context/context";

// CSS
import "./Folder.css";

// icons
import { FaChevronRight, FaChevronDown } from "react-icons/fa"; // False || True for openFolder
import {
  FaFolder,
  FaFolderOpen,
  FaFileAlt,
  FaRegFileImage,
} from "react-icons/fa"; //false || true open close folder

const Folder = ({ data }) => {
  const [openFolder, setOpenFolder] = useState(false);
  const { setObject, setSize } = useContext(Context);
  //
  function OpenIObject() {
    // открытие папки и отображение количества файлов и их размер
    setOpenFolder(!openFolder);
    setObject(data.content.length);
    setSize(data.content.length ** 2);
  }
  //
  return (
    <div className="Folder">
      <NavLink to={`/${data.name}`}>
        <button onClick={() => OpenIObject()} className="opORclos">
          {openFolder ? <FaChevronDown /> : <FaChevronRight />}
          {openFolder ? <FaFolderOpen /> : <FaFolder />}
          <p>{data.name}</p>
        </button>
      </NavLink>
      <div className={openFolder ? "openFolder" : "closeFolder"}>
        {data.content.map((e) => (
          <p className="openedFile" key={e.name}>
            {e.type == "txt" ? <FaFileAlt /> : ""}
            {e.type == "img" ? <FaRegFileImage /> : ""}
            {e.type == "folder" ? <FaFolder /> : ""}
            <p>{e.name}</p>
          </p>
        ))}
      </div>
    </div>
  );
};
export default Folder;

//const { setObject } = useContext(Context);
//onClick={setObject(allFiles.flat().length)
