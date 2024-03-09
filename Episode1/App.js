
/********************************** SINGLE ELEMENT ***********************************/
// const heading = React.createElement(
//     "h1", 
//     {id: "heading"}, 
//     "React"
// )
/********************************** MULTIPLE ELEMENT ********************************** */
const parent = React.createElement(
    "div", 
    {class:" parent"}, 
    React.createElement(
        "div",
        {class: "child"}, 
        React.createElement(
            "div",
            {class: "child"},
            [
                React.createElement("h1", {}, "GrandChild1"),
                React.createElement("h2", {}, "GrandChild2"),
                React.createElement("h3", {}, "GrandChild3")
            ]
        )
    )
);


console.log(parent) // heading => object
const root = ReactDOM.createRoot(document.getElementById("root")) // Source le rhe hai 
root.render(parent) // headig joki ek object hai usko element mein convert kar rha hai.


