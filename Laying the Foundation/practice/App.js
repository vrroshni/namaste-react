import React from "react";
import ReactDOM from 'react-dom/client'

const jsxHeading=(<h1 className="head">
    Hey using JSX
    </h1>)
console.log(jsxHeading)




// const HeadingComponent=()=><h1>from component shorter syntax</h1>

// const HeadingComponent1=()=>(<h1>
//     from component with multiple statements
//     </h1>)

// const HeadingComponent2=()=>{
//    return<h1>
//             from component with return
//         </h1>
//     }


const num=1000

const Title=()=><h1>Namaste React Title Component</h1>

const HeadingComponent=()=>{return(<div>
    <Title/>
    <Title></Title>
    {jsxHeading} 
    {Title()}
    Namaste React Component
    </div>)}

    


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>) 



