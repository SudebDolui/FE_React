/*
 *1. CSS StyleSheets.
 *2. Inline Styling.
 *3. CSS Modules.
 *4. CSS in JS Libraries.
 */

//  Note: CSS Stylesheets.

import React from "react";
import "./myStyle.css";
import styles from "./myStyle.module.css";

function CSSStyleSheet(props) {
  const propsClass = props.primary ? "primary" : "";
  return (
    <div>
      <h2 className={`${propsClass} font-xl`}>StyleSheet</h2>
    </div>
  );
}

// Note: Inline Styling.

function Inline() {
  const heading = {
    fontSize: "72px",
    color: "blue",
    backgroundColor: "Yellow",
  };
  const insideHeading = {
    fontSize: "12px",
    color: "orange",
  };
  return (
    <div style={heading}>
      <h2 style={insideHeading}>Inline</h2>
      <h4 className={styles.sucess}>Sucess</h4>
      <h4 className="error">Error</h4>
    </div>
  );
}

// Note: CSS Module - We need to use .module.css extension for the css file.
// Info: In the file where we require it we even need it to import for sure for example see in aboutJSX file of components.

function CSSModule() {
  return (
    <div>
      <h2 className={styles.cssStyle}>CSS Module.</h2> }
    </div>
  );
}

//Note: CSS in JS Libraries

export { Inline, CSSModule };

export default CSSStyleSheet;
