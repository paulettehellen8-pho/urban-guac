/*
   Components are functions
   input -> data
   output -> ui

   Create a reusable component
    Each component always has props

   Props are passed from parent to child
   -> All datatypes can be passed into props including other components
*/

function Parent() {
   //primitive datatypes
   const str = "Hello world"; //string
   const amount = 2000; //number
   const isOk = true; //boolean
   const notSet = null; //null

   //Object
   const car = {
      model: "Renult Truck",
      manufacturer: "Renult",
      engine: {
         cc: 2500,
      },
   };

   const colors = ["blue", "green", "yellow"];

   return (
      <div>
         <h1>I am the parent component</h1>
         <Child1
            str={str}
            amountInNumber={amount}
            isOk={isOk}
            notSet={notSet}
         />

         <Child2
            str={str}
            amountInNumber={amount}
            isOk={isOk}
            notSet={notSet}
            car={car}
            colors={colors}
            obj={{ name: "", value: "" }} //Always remember double brackets
         />

         <Child3
            str={str}
            amountInNumber={amount}
            isOk={isOk}
            notSet={notSet}
            car={car}
            colors={colors}
         />
      </div>
   );
}

//displaying props
function Child1(props) {
   // console.log(props);
   return (
      <div>
         <h1>I am the Child1 component</h1>
         <ul>
            <li>
               Favourite String <b>{props.str}</b>
            </li>
            <li>
               Amount <b>{props.amountInNumber}</b>
            </li>
            <li>
               isOk <b>{props.isOk}</b>
            </li>
            <li>
               isOk <b>{String(props.isOk)}</b>{" "}
               {/*For booleans-> convert them to strings before displaying */}
            </li>
            <li>
               Not Set <b>{props.notSet}</b>
            </li>
         </ul>
      </div>
   );
}

function Child2(props) {
   /*
      Destructuring
      key:value
         =>Instead of
            const str = props.str

         =>We use
            const {str, amountInNumber}=props

      Cannot destructure
      key-> that is number
         ->that is string naming variable

   */

   const { str, amountInNumber, isOk, notSet, car, colors } = props;

   return (
      <div>
         <h1>I am the Child2 component</h1>
         <ul>
            <li>
               Favourite String <b>{str}</b>
            </li>
            <li>
               Amount <b>{amountInNumber}</b>
            </li>
            <li>
               isOk <b>{isOk}</b>
            </li>
            <li>
               isOk <b>{String(isOk)}</b>{" "}
               {/*For booleans-> convert them to strings before displaying */}
            </li>
            <li>
               Not Set <b>{notSet}</b>
            </li>
            <li>
               Car Model <b>{car.model}</b>
            </li>
            <li>
               Car Manufacture <b>{car["manufacturer"]}</b>
            </li>
            <li>
               Engine <b>{car.engine.cc}</b>
            </li>
            <li>
               First color is <b>{colors[0]}</b>
            </li>
            <li>
               2nd color is <b>{colors[1]}</b>
            </li>

            <li>
               3rd color is <b>{colors[2]}</b>
            </li>
         </ul>
      </div>
   );
}

function Child3({ str, amountInNumber, isOk, notSet, car, colors }) {
   /*
      Direct Destructuring   
      Display props using prop keyword  

   */

   return (
      <div>
         <h1>I am the Child3 component</h1>
         <ul>
            <li>
               Favourite String <b>{str}</b>
            </li>
            <li>
               Amount <b>{amountInNumber}</b>
            </li>
            <li>
               isOk <b>{isOk}</b>
            </li>
            <li>
               isOk <b>{String(isOk)}</b>{" "}
               {/*For booleans-> convert them to strings before displaying */}
            </li>
            <li>
               Not Set <b>{notSet}</b>
            </li>
            <li>
               Car Model <b>{car.model}</b>
            </li>
            <li>
               Car Manufacture <b>{car["manufacturer"]}</b>
            </li>
            <li>
               Engine <b>{car.engine.cc}</b>
            </li>
            <li>
               First color is <b>{colors[0]}</b>
            </li>
            <li>
               2nd color is <b>{colors[1]}</b>
            </li>

            <li>
               3rd color is <b>{colors[2]}</b>
            </li>
         </ul>
      </div>
   );
}

export default Parent;
