import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";

function MyComponent() {
   return null; //valid JSX
}

function MyComponent2() {
   return (
      <div>
         <h1>I love Bangtang Sonyeondan</h1>
      </div>
   );
}

function MyComponent3() {
   return (
      <>
         <div>
            <h1>This is a react fragment</h1>
         </div>
         <div>
            <h3>It has multiple html elements</h3>
         </div>
      </>
   );
}

//this is wrong
/*
  function InvalidJsxComponent() {
    return (
      <div>
        <h1>This is a single html element</h1>
      </div>
      <div></div>
      )
  }
*/

function ReactFragment() {
   return (
      <>
         <div>
            <h1>This is a single html element</h1>
         </div>
         <div></div>
      </>
   );
}

function ParentComponent() {
   return (
      <div>
         <h1>This is the parent component</h1>
         <MyComponent></MyComponent> {/*Open and closing tags */}
         <MyComponent2 />
         <MyComponent3 />
      </div>
   );
}

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <h1>My first react app</h1>
      <MyComponent /> {/*self closing tags */}
      <MyComponent></MyComponent> {/*Open and closing tags */}
      <MyComponent2 />
      <MyComponent3 />
      <ParentComponent />
   </StrictMode>,
);
