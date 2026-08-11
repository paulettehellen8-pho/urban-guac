import { useEffect, useState } from "react";
import axios from "axios";

import TopNav from "./TopNav";
import InfoSection from "./InfoSection";
import PersonCard from "./PersonCard";

function GithubProject() {
   const [people, setPeople] = useState([]);

   //fetch api, axios
   const getUserData = async () => {
      try {
         let response = await axios({
            method: "GET",
            url: "https://api.github.com/users",
        
            params: { per_page: 999 },
         });
         setPeople(response.data);
      } catch (e) {
         console.log("Error is ", e);
      }
   };

   console.log(people);

   useEffect(() => {
      getUserData();
   }, []);

   //lifecycle, githubproject
   return (
      <div>
         {/* <h1>Github Project</h1> */}
         <TopNav setPeople={setPeople} />
         {/* <div
            style={{ backgroundColor: "rgba(0,0,0,0.1)", width: "100" }}
         ></div> */}

         <InfoSection people={people} />

         {people.map((person) => (
            <PersonCard key={person.id} person={person} />
         ))}
      </div>
   );
}

export default GithubProject;
