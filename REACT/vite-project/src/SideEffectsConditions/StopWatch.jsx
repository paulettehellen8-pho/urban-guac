/*
   Start, stop, reset<0>
*/

import { useEffect, useState } from "react";

function StopWatch() {
   const [isStopped, setIsStopped] = useState(true);
   const [k, setK] = useState(0); // times if we hav started and stopped the timer

   //tracking dependancies
   useEffect(() => {
      if (isStopped === false) {
         setK(k + 1);
      }
   }, [isStopped]);

   return (
      <div>
         <div>
            <button onClick={() => setIsStopped(false)}>Start</button>
            <button onClick={() => setIsStopped(true)}>Stop</button>
            {/* <button onClick={()=>setTime(0)}>Reset</button> */}
         </div>
         <div>
            Start clicked <b>{k}</b> times
         </div>
         <ShowTimer isStopped={isStopped} k={k} />
      </div>
   );
}

function ShowTimer({ isStopped, k }) {
   if (isStopped) {
      return null;
   }
   return <Timer k={k} />;
}

function Timer({ k }) {
   const [time, setTime] = useState(0);

   //born->interval
   useEffect(() => {
      const interval = setInterval(() => {
         console.log(`When k is ${k} Time is ${time}`);
         setTime((c) => c + 1);
         //previous state
      }, 1000);
      //memory leakage
      return () => clearInterval(interval);
   }, []);

   return (
      <div>
         <b>{time}</b>
      </div>
   );
}

export default StopWatch;
