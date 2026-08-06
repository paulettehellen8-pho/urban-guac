/*
   Create a form to take name,email,phone,password
   Have a submit button that console.logs the values when form is submitted

   After the form have a list to show the state changes as user is typing for each.

   For all the input fields use only 1 state variable.
      example [input,setInput]=useState(<object:hint>)
      -> it stores other data types.

*/

import { useState } from "react";

function Form2() {
   console.log(useState(""));
   
   const [input, setInput] = useState({
      name: "",
      email: "",
      phone: "",
      password: "",
   });

   //Array
   // const [input, setInput] = useState(["","","",""]);
   // const onSubmit = () => {
   //    console.log("Submit button click");
   //    console.log("Name is", input[0]);
   //    console.log("Email is", input[1]);
   //    console.log("Phone is", input[2]);
   //    console.log("Password is", input[3]);
   // };

   const onSubmit = () => {
      console.log("Submit button click");
      console.log("Name is", input.name);
      console.log("Email is", input.email);
      console.log("Phone is", input.phone);
      console.log("Password is", input.password);
   };

   return (
      <div>
         <div>
            <label>Name</label>
            <div>
               <input
                  type="text"
                  value={input.name} /*input[0]*/
                  onChange={
                     (e) => setInput({ ...input, name: e.target.value })
                     // setInput((prev) => ({ ...prev, name: e.target.value }))
                  }
               />
            </div>
         </div>

         <div>
            <label>Email</label>
            <div>
               <input
                  type="email"
                  value={input.email} /*input[1]*/
                  onChange={
                     (e) => setInput({ ...input, email: e.target.value })
                     // setInput((prev) => ({ ...prev, email: e.target.value }))
                     /*
                        Array
                        onChange={(e) => updateAt(0, e.target.value)}
                     */
                  }
               />
            </div>
         </div>

         <div>
            <label>Phone Number</label>
            <div>
               <input
                  type="tel"
                  value={input.phone} /*input[2]*/
                  onChange={(e) => {
                     const inputClone = { ...input };
                     inputClone.phone = e.target.value;
                     setInput(inputClone);
                  }}
               />
            </div>
         </div>

         <div>
            <label>Password</label>
            <div>
               <input
                  type="password"
                  value={input.password} /*input[3]*/
                  onChange={(e) => {
                     const inputClone = { ...input };//structuredClone(input)
                     inputClone.password = e.target.value;
                     setInput(inputClone);
                  }}
               />
            </div>
         </div>

         <div>
            <button onClick={onSubmit}>Submit</button>
         </div>

         <div>
            <ul>
               <li>Name: {input.name}</li>
               <li>Email: {input.email}</li>
               <li>Phone: {input.phone}</li>
               <li>Password: {input.password}</li>
            </ul>
            {/* <ul>
               <li>Name:{input[0]}</li>
               <li>Email:{input[1]}</li>
               <li>Phone:{input[2]}</li>
               <li>Password:{input[3]}</li>
            </ul> */}
         </div>
      </div>
   );
}

export default Form2;
