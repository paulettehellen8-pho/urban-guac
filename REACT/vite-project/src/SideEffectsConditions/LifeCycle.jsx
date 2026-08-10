/*
   useEffect hook <side effects>
      is a life cycle hook
      -> get Born : rendered  initially
      -> lives : when state changes:
      -> die -> when the component is removed
            clean up<prevent memory leak>



   Conditional rendering
   -> A component renders because it meets a certain condition <if statement>


   useEffect(@param1,@param2)
   @param1:required-> callback function
   @param2:dependancy array: []
*/
import { useEffect, useState } from "react";

function LifeCycle() {
   const [n, setN] = useState(0);
   const [k, setK] = useState(0);

   useEffect(() => {
      //Born(initial) and when it changes
      console.log("N has changed", n);
   }, [n]);

   return (
      <div>
         <div>
            <button onClick={() => setK(k - 1)}>-</button>
            <b> K : {k} </b>
            <button onClick={() => setK(k + 1)}>+</button>
         </div>
         <div>
            <button onClick={() => setN(n - 1)}>-</button>
            <b> N : {n} </b>
            <button onClick={() => setN(n + 1)}>+</button>
         </div>
         <EvenorOdd n={n} />
      </div>
   );
}

function EvenorOdd(props) {
   const { n } = props;

   if (n % 2 == 0) {
      return <EvenComponent />;
   }
   return <OddComponent />;
}

function EvenComponent() {
   //Born
   useEffect(() => {
      console.log("Even component rendered");
   }, []);

   return (
      <div>
         <h1>Even</h1>
      </div>
   );
}

function OddComponent() {
   useEffect(() => {
      return () => {
         console.log("Odd component died");
      };
   }, []);
   return (
      <div>
         <h1>Odd</h1>
      </div>
   );
}
export default LifeCycle;
