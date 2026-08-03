function Mapping() {
   /*
      In react you might need to display data from an array
      :for <array.map>
      react {expression}- Evaluate and yield results

      map(@param1)
     
      @param1=>callback function => for each(single) array item to be passed
         @param1(@param2,@param3)
            @param2->single array item, index


      Map function is a method in an array<pop, push>
         -> It creates a new array from going through the existing array
   */
   const numbers = [2, 6, 23, 565, 32];
   const powersOfNumber = numbers.map((n) => n * n);
   const justMap = numbers.map(() => "cats and dogs");

   console.log(powersOfNumber);
   console.log(justMap);

   const colors = ["green", "yellow", "blue", "black"];

   function SingleColor(c, i) {
      if (i === 1) {
         return null;
      }

      return (
         <div key={i}>
            for index <b>{i}</b> color is <b>{c}</b>
         </div>
      );
   }

   return (
      <div>
         <h1>Mapping colors</h1>
         <h4>Using Arrow function</h4>
         {colors.map((color, index) => {
            return (
               <div key={index}>
                  for index <b>{index}</b> color is <b>{color}</b>
               </div>
            );
         })}
         <h4>Using direct arrow function</h4>
         {colors.map((c, i) => {
            return (
               <div key={i}>
                  for index <b>{i}</b> color is <b>{c}</b>
               </div>
            );
         })}
         <h4>Using Anonymous function</h4>
         {colors.map(function (color, index) {
            return (
               <div key={index}>
                  for index <b>{index}</b> color is <b>{color}</b>
               </div>
            );
         })}
         <h4>Referencing a function</h4>
         {colors.map(SingleColor)}//simply call the function in here
         <h4>Using a Component</h4>
         {colors.map(function (c, i) {
            return <SingleColorComponent c={c} i={i} key={i} />;
         })}
      </div>
   );
}

function SingleColorComponent(props) {
   const { c, i } = props;

   return (
      <div key={i}>
         for index <b>{i}</b> color is <b>{c}</b>
      </div>
   );
}

export default Mapping;
