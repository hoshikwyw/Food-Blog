import React from "react";
import Main from "../components/home-components/Main";
import LeftandRight from "../components/home-components/LeftandRight";

const Home = () => {
  return (
    <div className="">
      <div className=" invisible absolute -left-[1000px] md:visible md:sticky lg:visible lg:sticky">
        <Main />
      </div>
      <LeftandRight />
    </div>
  );
};

export default Home;
