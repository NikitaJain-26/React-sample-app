const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child1" }, [React.createElement("h1", {}, "Hello i am H1 tag"),React.createElement("h2", {}, "Hello i am H2 tag")]), React.createElement("div", { id: "child2" }, React.createElement("h1", {}, "Hello i am H1 tag"))])


// heading = React.createElement("h1", { id: "heading" }, "Heelo world by React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);