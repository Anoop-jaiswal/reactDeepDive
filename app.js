// const heading = React.createElement(
//   "h1",
//   { id: "heading", abc: "h1-tag" },
//   "heading"
// );
// //above object inside createEelememt is use to write attributes

// console.log(heading); //it will return an object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//
// const heading = React.createElement("h1", { id: "heading" }, "this is h1 tag");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const div1 = React.createElement("div", { id: "div" }, [
  React.createElement("child", { id: "div2" }, [
    React.createElement("h1", { id: "h1" }, "i am child1 h1"),
    React.createElement("h2", { id: "h2" }, "i am child1 h2"),
  ]),
  React.createElement("child2", { id: "div2" }, [
    React.createElement("h1", { id: "h1" }, "i am child2 h1"),
    React.createElement("h2", { id: "h2" }, "i am child2 h2"),
  ]),
]);
const heading = React.createElement("h1", { id: "heading" }, "this is h1 tag");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div1);
