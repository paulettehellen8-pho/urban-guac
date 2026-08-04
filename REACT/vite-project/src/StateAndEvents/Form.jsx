import { useState } from "react";

function Form() {
   console.log(useState(""));

   const stateData = useState("");

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const nameOnChange = (e) => {
      // console.log(e);
      // console.log("Name is", e.target.value);
      setName(e.target.value);
   };

   // const emailOnChange = (e) => {
   //    console.log("Email is", e.target.value);
   // };

   // const passwordOnChange = (e) => {
   //    console.log("Password is", e.target.value);
   // };

   const onSubmit = () => {
      console.log("Submit button click");
      console.log("Name is", name);
      console.log("Email is", email);
      console.log("Password is", password);
   };

   return (
      <div>
         <main>
            <div>
               <label>Name</label>
            </div>
            <div>
               <input value={name} onChange={nameOnChange} />
            </div>
         </main>
         <main>
            <div>
               <label>Email</label>
            </div>
            <div>
               <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
               />
            </div>
         </main>
         <main>
            <div>
               <label>Phone number</label>
            </div>
            <div>
               <input
                  value={stateData[0]}
                  onChange={(e) => stateData[1](e.target.value)}
                  type="email"
               />
            </div>
         </main>
         <main>
            <div>
               <label>Password</label>
            </div>
            <div>
               <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
               />
            </div>
         </main>
         <main>
            <button onClick={onSubmit}>Submit</button>
         </main>
         <ul>
            <li>Name:{name}</li>
            <li>Email:{email}</li>
            <li>Phone Number: {stateData[0]}</li>
            <li>Password:{password}</li>
         </ul>
      </div>
   );
}

export default Form;
