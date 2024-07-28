const heading = React.createElement("h1", { id: "heading" }, "HELLO WORLD FROM REACT");

{/* <div id="parent">
    <div id="child">
        <h1>Hi I am nested H1</h1>
    </div>
</div> */}

const nested = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
       [ 
        React.createElement("h1", {}, "Hi I am nested h1 tag"),
        React.createElement("h2", {}, "Hi I am Sibling of h1 tag"),
       ]
    )
)

console.log(nested)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(nested);