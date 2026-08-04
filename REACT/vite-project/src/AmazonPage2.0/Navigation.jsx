/*
   Ensure the assets are in the src
   import <name> from "<relative path>"
 
*/

import logo from "./assets/logo.png";

/* component naming rules */
function Navigation() {
   return (
      <div className="nav">
         <img src={logo} width="60px" />
         <input placeholder="Search" />
      </div>
   );
}

/*
   export so that any other file can import the component
   1. Default Export: <one major>
*/
export default Navigation;
