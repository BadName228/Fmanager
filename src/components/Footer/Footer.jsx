import React, { useContext } from "react";
import { Context } from "../../context/context";

// CSS
import "./styles.css";

function Footer(props) {
  const { object, size } = useContext(Context);
  return (
    <footer>
      <p className="SizeFile">
        Objects: {object}, Size: {size} Kb
      </p>
    </footer>
  );
}

export default Footer;
