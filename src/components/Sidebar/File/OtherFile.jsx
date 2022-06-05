import React, { useState } from "react";
import "./../Folder/Folder.css";

// icons
import { FaFileAlt } from "react-icons/fa";

const OtherFile = ({ data }) => {
  const [openFolder, setOpenFolder] = useState(false);
  return (
    <div className="Folder">
      <button onClick={() => setOpenFolder(!openFolder)} className="opORclos">
        <FaFileAlt />
        <p>{data.name}</p>
      </button>
    </div>
  );
};
export default OtherFile;
