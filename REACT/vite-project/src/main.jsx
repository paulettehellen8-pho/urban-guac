import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import Navigation from "./AmazonPage/Navigation";
// import FilterList from "./AmazonPage/FilterList";
// import ItemCard from "./AmazonPage/ItemCard";
// import SideBar from "./AmazonPage/SideBar";
// import MainSection from "./AmazonPage/MainSection";

// import AmazonPage from "./AmazonPage";
// import "./index.css";

// import Props from "./Props";

// import Mapping from "./Mapping";

// import StateAndEvents from "./StateAndEvents/Form2.0";

//import SideEffectsConditions from "./SideEffectsConditions/StopWatch";

import GithubProject from "./GithubProject";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      {/* <Navigation />
      <FilterList />
      <ItemCard />
      <SideBar />
      <MainSection/> */}

      {/* <AmazonPage /> */}

      {/* <Props /> */}

      {/* <StateAndEvents /> */}

      {/* <SideEffectsConditions /> */}

      <GithubProject />
   </StrictMode>,
);
