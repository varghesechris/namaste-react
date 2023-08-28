import React from "react";
import  ReactDOM  from "react-dom/client";

//react element
const Title  = () => <h1 className="head" tabIndex= "5">Namaste React using Index</h1>


const jsxHeading = <h1 id = "heading" > Namste Jsx</h1>;


// react component 
const HeadingComponent  = () =>  (
<div id=  "container">
    <Title/>
<h1> Nasmeste React Functional Component </h1>;
</div>
)


const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);