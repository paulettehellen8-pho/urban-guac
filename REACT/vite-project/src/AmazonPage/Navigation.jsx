/*
   Ensure the assets are in the src
   import <name> from "<relative path>"
 
*/

import logo from "./assets/logo.png";

/* component naming rules */
function Navigation() {
   return (
      <div>
         <h1>Navigation Section</h1>
         <img src={logo}></img>
      </div>
   );
}

/*
   export so that any other file can import the component
   1. Default Export: <one major>
*/
export default Navigation;
