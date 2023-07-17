import React, { useEffect, useState } from "react";
import { AiOutlineCalendar, AiOutlineHeart } from "react-icons/ai";

const Left = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=e`
    );
    const { meals } = await api.json();
    setMeals(meals);
    // console.log(meals);
  };

  return (
    <div className=" ">
      <div className=" flex flex-wrap gap-7 w-[100%] ">
        {meals?.map((item) => (
          <div
            key={item?.id}
            className=" bg-white shadow-md shadow-blue-gray-200 w-full md:w-[46%] ">
            <div
              className=" w-[85%] mx-auto py-5
               flex flex-col">
              <img src={item?.strMealThumb} className=" w-full h-60" alt="" />
              <h2 className=" text-lg font-semibold my-3 tracking-wider">
                {item?.strMeal}
              </h2>

              <div className=" flex items-center gap-5 text-blue-gray-500 cursor-pointer">
                <h2 className=" flex text-sm items-center gap-3">
                  <AiOutlineCalendar /> January 16 , 2021
                </h2>
                <h2 className=" flex text-sm items-center gap-2">
                  <AiOutlineHeart /> 10
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex justify-end my-3 me-5">
        <button className=" bg-gray-400 px-4 py-1 rounded text-white hover:text-black hover:bg-yellow-400">
          See More
        </button>
      </div>
    </div>
  );
};

export default Left;
