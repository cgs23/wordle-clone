import * as React from "react";
import "./styles.css";

const Footer: React.FunctionComponent = () => {
  return (
    <footer>
      <p style={{ fontSize: "11px" }}>
        From <a href="https://github.com/cgs23/wordle-clone">Stavros</a> with ❤️
      </p>
    </footer>
  );
};

export default Footer;
