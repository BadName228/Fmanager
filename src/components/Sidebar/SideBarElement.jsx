import React, { useState } from "react";

// icons
import { FaChevronRight, FaChevronDown } from "react-icons/fa"; // False || True for openFolder стрелка
import { FaFolder, FaFolderOpen } from "react-icons/fa"; //false || true open close folder значок

function SideBarElementFolder(data) {
  const [openFolder, setOpenFolder] = useState(false);

  function OpenFolredOrFile() {
    setOpenFolder = !openFolder;
  }

  console.log(data.data.content);
  return (
    <div>
      <button
        className="SideBarElement"
        onClick={() => setOpenFolder(!openFolder)}
      >
        {openFolder ? <FaChevronDown /> : <FaChevronRight />}
        {openFolder ? <FaFolderOpen /> : <FaFolder />}
        {data.data.name}
        {data.data.type == "folder" ? "" : "." + data.data.type}
      </button>
      <div className={openFolder ? "visible" : "closed"}>
        {/* {data.data.content.map((e) => (
            <button className="SideBarElement" key={e}>
                <p></p>
            </button>
        )} */}
      </div>
    </div>
  );
}
export default SideBarElementFolder;
