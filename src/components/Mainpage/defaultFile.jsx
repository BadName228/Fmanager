import React from "react";

// CSS
import "./styleForMainPage.css";

// icon
import { FaFolder, FaFileAlt } from "react-icons/fa";

function DefaultFile({ data }) {
  //
  return (
    // {data.map((e) => (
    //       <div className="MPFolder" key={data.name}>
    //       <p className="MPname">
    //         {data.type == "folder" ? <FaFolder /> : <FaFileAlt />}
    //         {data.name}
    //       </p>
    //       <p className="MPfileDLE">{data.dateLastEditing}</p>
    //       <p className="MPfileType">{data.type}</p>
    //       <p className="MPfileSize">{data.getSize} Kb</p>
    //     </div>
    //     ))}
    <p>{data[0].name}</p>
  );
}
export default DefaultFile;
