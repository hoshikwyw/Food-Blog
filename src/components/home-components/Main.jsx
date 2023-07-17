import React from "react";

const Main = () => {
  return (
    <div className=" flex justify-center gap-6 mt-5">
      <div className="  w-[50%] h-[360px] bg-[url(https://www.eatthis.com/wp-content/uploads/sites/4/2022/01/sweet-spicy-glazed-salmon-veggies.jpg?quality=82&strip=1)] bg-cover bg-no-repeat bg-center relative  ">
        <div className=" bg-black bg-opacity-40 flex flex-col h-full text-black">
          <div className=" bg-black bg-opacity-40 w-full absolute inset-x-0 bottom-0 py-2 flex flex-col gap-2 items-center ">
            <h2 className=" bg-yellow-400 px-2 py-1">Curry</h2>
            <p className=" text-white font-semibold text-xl tracking-wider">
              Let's cool some tasty things with chef charlie
            </p>
            <h2 className=" text-[#ffffffd7]">January 16 , 2015</h2>
          </div>
        </div>
      </div>
      <div className=" w-[35%] flex flex-col gap-[20px]">
        <div className=" h-[170px] bg-[url(https://img.sndimg.com/food/image/upload/v1/img/recipes/22/78/2/xy39o2sOTtudkgyDgZtv_spaghettisauce.jpg)] bg-cover bg-no-repeat bg-center relative">
          <div className=" bg-black bg-opacity-25 flex flex-col h-full text-black">
            <div className=" bg-black bg-opacity-40 w-full absolute inset-x-0 bottom-0 py-2 flex flex-col gap-1 items-center ">
              <h2 className=" bg-yellow-400 px-2 py-1">Curry</h2>
              <p className=" text-white font-semibold tracking-wider">
                Let's cool some tasty things with chef charlie
              </p>
              <h2 className=" text-[#ffffffd7] text-sm">January 16 , 2015</h2>
            </div>
          </div>
        </div>
        <div className=" h-[170px] bg-[url(https://insanelygoodrecipes.com/wp-content/uploads/2021/03/Oven-Roasted-Fried-Chicken.png)] bg-cover bg-no-repeat bg-center relative">
          <div className=" bg-black bg-opacity-25 flex flex-col h-full text-black">
            <div className=" bg-black bg-opacity-40 w-full absolute inset-x-0 bottom-0 py-2 flex flex-col gap-1 items-center ">
              <h2 className=" bg-yellow-400 px-2 py-1">Curry</h2>
              <p className=" text-white font-semibold tracking-wider">
                Let's cool some tasty things with chef charlie
              </p>
              <h2 className=" text-[#ffffffd7] text-sm">January 16 , 2015</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
