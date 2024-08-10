import React from "react";
import MyNavbar from "./navbar";
import HomePage from "./homepage";


//create your first component
const Home = () => {
  return (
    <div>
      <MyNavbar />
      <HomePage />
    </div>
  );
};

export default Home;
