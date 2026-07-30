import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import Navigation from "./AmazonPage/Navigation";
// import FilterList from "./AmazonPage/FilterList";
// import ItemCard from "./AmazonPage/ItemCard";
// import SideBar from "./AmazonPage/SideBar";
// import MainSection from "./AmazonPage/MainSection";

import AmazonPage from "./AmazonPage";
import "./index.css";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      {/* <Navigation />
      <FilterList />
      <ItemCard />
      <SideBar />
      <MainSection/> */}

      <AmazonPage />
   </StrictMode>,
);
