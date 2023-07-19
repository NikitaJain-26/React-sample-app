import React from "react";
import ReactDOM from "react-dom/client";

// nested div element using React element.
const parent = React.createElement("div",
 { id: "title" }, 
 [React.createElement("h1", { id: "child1" },"Hello i am H1 tag"),
 React.createElement("h2", {id: "child2"}, "Hello i am H2 tag"),
 React.createElement("h3", {id: "child3"}, "Hello i am H3 tag")])

 const usingJsx = (<div id="title"> 
 <h1>Hello i am H1 tag</h1>
 <h2>
    Hello i am H2 tag
 </h2>
 <h3>Hello i am H3 tag</h3>
 </div>);

  const Header = () =>{ 
 return <div id="title"> 
 {parent}
 <h1>Hello i am H1 tag</h1>
 <h2>
    Hello i am H2 tag
 </h2>
 {usingJsx}
 <h3>Hello i am H3 tag</h3>
 </div>};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);
