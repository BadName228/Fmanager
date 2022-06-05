import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

// CSS
import "./styleForMainPage.css";

// icon
import { FaFolder, FaFileAlt, FaFileImage } from "react-icons/fa";

// comnponents
import HeaderInformation from "./HeaderInformation";
import { Context } from "../../context/context";
import DefaultFile from "./defaultFile";

function Mainpage({ fileForMainpage }) {
  const context = useContext(Context);
  // сначала рендер папок потом файлы
  // папки
  const FoldersForMap = fileForMainpage.store.filter(
    (obj) => obj.type == "folder"
  );
  // остальные файлы
  const OtherFileForMap = fileForMainpage.store.filter(
    (obj) => obj.type !== "folder"
  );
  const AllFileForMap = [FoldersForMap, OtherFileForMap]; // сначала рендер папок потом файлы
  //
  const foldersName = ["/"]; // url имена для маршрутизации по папкам
  //
  for (let i = 0; i < FoldersForMap.length; i++) {
    foldersName.push(FoldersForMap[i].name);
  }

  return (
    <div className="MAINPAGE">
      <HeaderInformation />
      <div className="Files">
        <Routes>
          <Route
            path="/"
            element={AllFileForMap.flat().map((e) => (
              <div className="MPFolder" key={e.name}>
                <p className="MPname">
                  {e.type == "folder" ? <FaFolder /> : <FaFileAlt />}
                  {e.name}
                </p>
                <p className="MPfileDLE">{e.dateLastEditing}</p>
                <p className="MPfileType">{e.type}</p>
                <p className="MPfileSize">{e.getSize} Kb</p>
              </div>
            ))}
          />
          {FoldersForMap.map((e) => (
            <Route
              path={e.name}
              key={e.name}
              element={e.content.map((element) => (
                <div className="MPFolder" key={element.name}>
                  <p className="MPname">
                    {element.type == "folder" ? <FaFolder /> : ""}
                    {element.type == "txt" ? <FaFileAlt /> : ""}
                    {element.type == "img" ? <FaFileImage /> : ""}
                    {element.name}
                  </p>
                  <p className="MPfileDLE">{element.dateLastEditing}</p>
                  <p className="MPfileType">{element.type}</p>
                  <p className="MPfileSize">{element.getSize} Kb</p>
                </div>
              ))}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default Mainpage;
// [].map(e) => ({AllFileForMap.flat().map((e) => (
