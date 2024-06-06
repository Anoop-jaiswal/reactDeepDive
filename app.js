import React from "react";
import ReactDOM from "react-dom/client";

// const div1 = React.createElement("div", { id: "div", key: "1" }, [
//   React.createElement("div", { id: "div2", key: "2" }, [
//     React.createElement("h1", { id: "h1", key: "3" }, "i am child1 h1"),
//     React.createElement("h2", { id: "h2", key: "4" }, "i am child1 h2"),
//   ]),
//   React.createElement("div", { id: "div2", key: "5" }, [
//     React.createElement("h1", { id: "h1", key: "6" }, "i am child2  h1"),
//     React.createElement("h2", { id: "h2", key: "7" }, "i am child2 h2"),
//   ]),
// ]);
// const heading = React.createElement("h1", { id: "heading" }, "this is h1 tag");

//
// JSX -> Transpiled before it reached to JS ->PARCEL => Babel
// JSX =>React.createElement => ReactElemet => JS object => HTML element => render
const jsxHeading = <h1>Testing Jsx heading</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
