import React from "react";
import ReactDOM from "react-dom/client";


const Title = () => {
  return <>Rendering Title</>;
};

const Heading = () => {
  return (
    <>
      <Title />
      <h1>Rendering Heading</h1>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
