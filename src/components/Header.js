import { useEffect, useState } from "react";
import "../../Style.css";

const Header = () => {
  const [colorMode, setColorMode] = useState("Dark Mode");


  return (
    <>
      <div className="header-container">
        <div>
          <h3>Where is the World?</h3>
        </div>
        <div>
          <button
            onClick={() => {
              if (colorMode == "Dark Mode") {
                setColorMode("Light Mode");
              } else {
                setColorMode("Dark Mode");
              }
            }}
          >
            {colorMode}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
