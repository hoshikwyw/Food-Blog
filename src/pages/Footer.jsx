import React from "react";
import { BsPinterest, BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className=" w-full md:w-[50%] md:mx-auto lg:w-[98%]">
      <div className=" flex flex-col lg:flex-row justify-evenly mx-5 gap-2 cursor-pointer">
        {/* master chef section  */}
        <div className=" px-3 h-fit lg:w-[35%] py-5">
          <h2 className=" text-white text-xl mb-5 uppercase font-semibold text-center w-full bg-yellow-400 py-1">
            masterchef
          </h2>
          <div className=" flex flex-col md:flex-row lg:flex-row items-center md:items-start lg:items-start gap-2">
            <img
              src="https://i.pinimg.com/564x/68/d8/78/68d8788eb4d4a629740e5c24ec638a7b.jpg"
              className=" w-28 rounded-full"
              alt=""
            />
            <div className=" flex flex-col gap-3 items-center md:items-start lg:items-start">
              <p className=" w-[80%] px-3 break-words">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                eligendi, fugiat error a, necessitatibus debitis blanditiis nemo
                soluta ipsa.
              </p>
              <div className=" flex gap-2 text-slate-600 text-xl px-3">
                <a href="">
                  <BsFacebook />
                </a>
                <a href="">
                  <BsTwitter />
                </a>
                <a href="">
                  <AiFillInstagram />
                </a>
                <a href="">
                  <BsPinterest />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* tag section  */}
        <div className=" px-3 h-fit lg:w-[35%] py-5">
          <h2 className=" text-white text-xl mb-5 uppercase font-semibold text-center w-full bg-yellow-400 py-1">
            tags
          </h2>
          <div className=" flex flex-wrap gap-2">
            <h2 className=" uppercase text-slate-800 text-sm font-semibold bg-slate-100 hover:shadow-md hover:bg-blue-gray-400 w-fit px-2 py-2 ">
              blueberry <span className=" bg-amber-400 px-1">( 1 )</span>
            </h2>
            <h2 className=" uppercase text-slate-800 text-sm font-semibold bg-slate-100 hover:shadow-md hover:bg-blue-gray-400 w-fit px-2 py-2 ">
              curry <span className=" bg-amber-400 px-1">( 1 )</span>
            </h2>
            <h2 className=" uppercase text-slate-800 text-sm font-semibold bg-slate-100 hover:shadow-md hover:bg-blue-gray-400 w-fit px-2 py-2 ">
              food <span className=" bg-amber-400 px-1">( 1 )</span>
            </h2>
            <h2 className=" uppercase text-slate-800 text-sm font-semibold bg-slate-100 hover:shadow-md hover:bg-blue-gray-400 w-fit px-2 py-2 ">
              healthy <span className=" bg-amber-400 px-1">( 1 )</span>
            </h2>
            <h2 className=" uppercase text-slate-800 text-sm font-semibold bg-slate-100 hover:shadow-md hover:bg-blue-gray-400 w-fit px-2 py-2 ">
              healthy living <span className=" bg-amber-400 px-1">( 1 )</span>
            </h2>
            <h2 className=" uppercase text-slate-800 text-sm font-semibold bg-slate-100 hover:shadow-md hover:bg-blue-gray-400 w-fit px-2 py-2 ">
              lunch <span className=" bg-amber-400 px-1">( 1 )</span>
            </h2>
            <h2 className=" uppercase text-slate-800 text-sm font-semibold bg-slate-100 hover:shadow-md hover:bg-blue-gray-400 w-fit px-2 py-2 ">
              mexican <span className=" bg-amber-400 px-1">( 1 )</span>
            </h2>
            <h2 className=" uppercase text-slate-800 text-sm font-semibold bg-slate-100 hover:shadow-md hover:bg-blue-gray-400 w-fit px-2 py-2 ">
              snacks <span className=" bg-amber-400 px-1">( 1 )</span>
            </h2>
            <h2 className=" uppercase text-slate-800 text-sm font-semibold bg-slate-100 hover:shadow-md hover:bg-blue-gray-400 w-fit px-2 py-2 ">
              soup <span className=" bg-amber-400 px-1">( 1 )</span>
            </h2>
            <h2 className=" uppercase text-slate-800 text-sm font-semibold bg-slate-100 hover:shadow-md hover:bg-blue-gray-400 w-fit px-2 py-2 ">
              vegetarian <span className=" bg-amber-400 px-1">( 1 )</span>
            </h2>
          </div>
        </div>
        {/* popular post section  */}
        <div className=" px-3 h-fit lg:w-[35%] py-5">
          <h2 className=" text-white text-xl mb-5 uppercase font-semibold text-center w-full bg-yellow-400 py-1">
            popular posts
          </h2>
          <div>
            <div className=" flex gap-5 items-center border-b pb-3">
              <div className=" w-[30%]">
                <img
                  src="https://www.recipetineats.com/wp-content/uploads/2023/03/Jalapeno-popper-stuffed-chicken_4.jpg?w=747&h=747&crop=1"
                  className="  w-full h-20"
                  alt=""
                />
              </div>
              <a
                className=" text-slate-600 hover:text-yellow-400 "
                href="https://fooddy-soratemplates.blogspot.com/2015/01/let-cook-some-tasty-things-with-chef.html">
                Let's Cook Some Tasty Things With Chef Charlie{" "}
              </a>
            </div>
            <div className=" flex gap-5 items-center border-b pb-3">
              <div className=" w-[30%]">
                <img
                  src="https://www.eatthis.com/wp-content/uploads/sites/4/2022/01/sweet-spicy-glazed-salmon-veggies.jpg?quality=82&strip=1"
                  className="  w-full h-20"
                  alt=""
                />
              </div>
              <a
                className=" text-slate-600 hover:text-yellow-400"
                href="https://fooddy-soratemplates.blogspot.com/2015/01/tuna-salad-wrapped-in-cabbage-with-lemon.html">
                Tuna Salad Wrapped In Cabbage With Lemon{" "}
              </a>
            </div>
            <div className=" flex gap-5 items-center border-b pb-3">
              <div className=" w-[30%]">
                <img
                  src="https://img.kidspot.com.au/-JhtJPyZ/kk/2016/04/chicken-teriyaki-meatballs-108686-1.jpg"
                  className=" w-full h-20"
                  alt=""
                />
              </div>
              <a
                className=" text-slate-600 hover:text-yellow-400 w-[70%]"
                href="https://fooddy-soratemplates.blogspot.com/2015/01/fried-tacos-with-tomatao-salad_16.html">
                Fried Tacos With Tomatao Salad{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* icons  */}
      <div className=" flex text-xl gap-5 justify-center lg:justify-end me-5 my-5">
        <a href="">
          <BsTwitter className=" text-blue-500" />
        </a>
        <a href="">
          <BsFacebook className=" text-blue-800" />
        </a>
        <a href="">
          <AiFillInstagram className=" text-pink-600" />
        </a>
        <a href="">
          <TfiYoutube className=" text-red-700" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
