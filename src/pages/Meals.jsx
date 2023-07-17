import React, { useState, useEffect } from "react";
import ScrollToTop from "../components/ScrollToTop";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  console.log(meals);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=b`
    );
    const { meals } = await api.json();
    setMeals(meals);
    // console.log(meals);
  };
  return (
    <div className=" w-[96%] mx-auto">
      <div className="">
        <ScrollToTop />
      </div>
      <div className=" text-black flex flex-wrap gap-8 justify-center">
        {meals?.map((meal) => (
          <div
            key={meal?.id}
            className=" bg-white shadow-md shadow-blue-gray-200 w-80 px-4 pt-4 pb-2">
            <div
              className="
               flex flex-col">
              <img src={meal?.strMealThumb} className=" w-cover h-60" alt="" />
              <h2 className=" text-xl font-bold my-3 tracking-wider">
                {meal?.strMeal}
              </h2>
              <h2 className=" font-semibold ">
                Meal's Category :{" "}
                <span className=" font-semibold italic font-serif text-slate-500">
                  {meal?.strCategory}
                </span>
              </h2>
              <div className=" flex justify-between items-center mt-5">
                <button className=" hover:bg-slate-400 hover:text-white bg-yellow-400 text-slate-500 font-semibold px-3 py-1 rounded">
                  View
                </button>
                <button className=" hover:bg-slate-400 hover:text-white bg-yellow-400 text-slate-500 font-semibold px-3 py-1 rounded">
                  Like
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;