function Form() {
   const nameOnChange = (e) => {
      console.log(e);
      console.log("Name is", e.target.value);
   };

   const emailOnChange = (e) => {
      console.log("Email is", e.target.value);
   };

   const passwordOnChange = (e) => {
      console.log("Password is", e.target.value);
   };

   const onSubmit = () => {
      console.log("Submit button click");
   };

   return (
      <div>
         <main>
            <div>
               <label>Name</label>
            </div>
            <div>
               <input onChange={nameOnChange} />
            </div>
         </main>
         <main>
            <div>
               <label>Email</label>
            </div>
            <div>
               <input onChange={emailOnChange} type="email" />
            </div>
         </main>
         <main>
            <div>
               <label>Password</label>
            </div>
            <div>
               <input onChange={passwordOnChange} type="password" />
            </div>
         </main>
         <main>
            <button onClick={onSubmit}>Submit</button>
         </main>
      </div>
   );
}

export default Form;
