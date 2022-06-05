import React from "react";

// components
import Folder from "./Folder/Folder";
import OtherFile from "./File/OtherFile";

// CSS
import "./styles.css";

function Sidebar({ files }) {
  // сначала рендер папок потом файлы
  const FoldersForMap = files.store.filter((obj) => obj.type == "folder");
  const OtherFileForMap = files.store.filter((obj) => obj.type !== "folder");
  //
  return (
    <div className="sidebarPage">
      {FoldersForMap.map((e) => (
        <Folder key={e.name} data={e} />
      ))}
      {OtherFileForMap.map((e) => (
        <OtherFile key={e.name} data={e} />
      ))}
    </div>
  );
}

export default Sidebar;
