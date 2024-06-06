import React from "react";
import ReactDOM from "react-dom/client";

// JSX -> Transpiled before it reached to JS ->PARCEL => Babel
// JSX =>Babel transpile it into React.createElement => ReactElemet => JS object => HTML element => render
const jsxHeading = <h1>Testing Jsx heading</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
