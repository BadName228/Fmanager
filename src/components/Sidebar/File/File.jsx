import React from "react";
import "./File.css";

// icons
import { FaFileAlt } from "react-icons/fa"; // icon txt file

const File = ({ data }) => {
  return (
    <div className="File">
      <FaFileAlt />
      <p>
        {data.name}.{data.type}
      </p>
    </div>
  );
};
export default File;
