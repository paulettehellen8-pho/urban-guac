import axios from "axios";
import { useState } from "react";

function TopNav(props) {
   const { setPeople } = props;
   const [search, setSearch] = useState("");

   const onSearch = async () => {
      try {
         const trimmedString = search.trim();
         if (trimmedString === "" || trimmedString.length < 3) {
            return;
         }
         let response = await axios({
            method: "GET",
            url: "https://api.github.com/search/users",
          
            params: {
               q: trimmedString,
            },
         });

         setPeople(response.data.items);
      } catch (e) {}
   };

   return (
      <div className="" style={{ display: "flex", alignItems: "center" }}>
         <img
            style={{ width: "40px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfHFDMhRGx7fbgApmxmDKe7TEHdaHDzitMtBsM2TKCsA&s=10"
         />
         {/* <input
            style={{ width: "50vw", marginLeft: "1em" }}
            search={search}
            setSearch={setSearch}
         /> */}
         <input
            style={{ width: "50vw", marginLeft: "1em" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
         />

         <button onClick={onSearch}>Search</button>
      </div>
   );
}

export default TopNav;
