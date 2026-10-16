import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";
import bgImg from "./../../Assets/bg.jpg"

function Screen() {
   //const notify = () => toast("Here is your toast.");

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const request = useAxios();

   const handleSignIn = async () => {
      if (!email) {
         toast.error("Email required")
         return
      }
      if (!password) {
         toast.error("Password required");
         return;
      }

      const res = await request({
         method:"POST",
         url:"memmber/login",
         data:{
            email,
            password
         },
      })
      console.log(res);
      if (res?._error===true){
         return
      }
      // successful
      // make a request
   };

   return (
      <div
         className="flex justify-center items-center"
         style={{
            width: "100vw",
            height: "100vh",
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
         }}
      >
         <div className="w-[90%] md:w-[40vw]">
            {/*<div className="w-full max-w-xs">*/}
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
               <div className="mb-4">
                  <label
                     className="block text-gray-700 text-sm font-bold mb-2"
                     for="username"
                  >
                     Email
                  </label>
                  <input
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="username"
                     type="email"
                     placeholder="Email"
                     value={email}
                     onChange={(e)=>setEmail(e?.target.value)}
                  />
               </div>
               <div className="mb-6">
                  <label
                     className="block text-gray-700 text-sm font-bold mb-2"
                     for="password"
                  >
                     Password
                  </label>
                  <input
                     className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                     id="password"
                     type="password"
                     placeholder="******************"
                     value={password}
                     onChange={(e)=>setPassword(e?.target.value)}
                  />
                  <p className="text-red-500 text-xs italic">
                     Please choose a password.
                  </p>
               </div>
               <div className="flex items-center justify-between">
                  <button
                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                     type="button"
                     onClick={handleSignIn}
                  >
                     Sign In
                  </button>
                  <a
                     className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                     href="#"
                  >
                     Forgot Password?
                  </a>
               </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
               &copy;2020 Acme Corp. All rights reserved.
            </p>
         </div>
      </div>
   );
}

export default Screen;
