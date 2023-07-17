import React, { useState } from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";

const Right = () => {
  const [detail, setDetail] = useState(false);
  console.log(detail);
  return (
    <div className=" flex flex-col gap-5">
      <div className=" bg-white shadow-md px-3 py-3 rounded">
        <h2 className=" border-b pb-2">Follow Us</h2>
        <div className=" mt-5 px-2 flex flex-col gap-3">
          <p className=" flex justify-between items-center bg-[#e8e8e861] px-3 py-1 rounded hover:bg-blue-400 ">
            <span className=" uppercase tracking-wider text-[11px] ">
              {" "}
              follow on twitter
            </span>
            <BsTwitter className=" border-s border-black ps-3 text-[26px]  " />
          </p>
          <p className=" flex justify-between items-center bg-[#e8e8e861] hover:bg-blue-600  px-3 py-1 rounded ">
            <span className=" uppercase tracking-wider text-[11px] ">
              {" "}
              like on facebook
            </span>
            <BsFacebook className=" border-s border-black ps-3 text-[26px]  " />
          </p>
          <p className=" flex justify-between items-center bg-[#e8e8e861] hover:bg-red-500 px-3 py-1 rounded ">
            <span className=" uppercase tracking-wider text-[11px] ">
              {" "}
              subscribe on youtube
            </span>
            <TfiYoutube className=" border-s border-black ps-3 text-[26px]  " />
          </p>
          <p className=" flex justify-between items-center bg-[#e8e8e861] hover:bg-red-300 px-3 py-1 rounded ">
            <span className=" uppercase tracking-wider text-[11px] ">
              {" "}
              follow on instagram
            </span>
            <AiFillInstagram className=" border-s border-black ps-3 text-[26px] " />
          </p>
        </div>
      </div>
      <div className=" bg-white shadow-md px-3 py-3 rounded">
        <p className=" flex justify-evenly px-2 py-1 border-b border-black ">
          <button
            className=" border-e pe-20 border-black"
            onClick={() => setDetail(false)}>
            Popular
          </button>
          <button onClick={() => setDetail(true)}>Blog Archive</button>
        </p>

        {detail ? (
          <div className=" w-full h-full px-5 py-8">
            ▼ January (9) Let's Cook Some Tasty Things With Chef Charlie
            Mnesarchum consetetur modo dissentiunt reprehendunt Quick But Tasty
            Fried Vegetable Buns Mexican Snacks For The Kids Tuna Salad Wrapped
            In Cabbage With Lemon Mixed Veg Soup With Beans, Brinjal and
            Cauliflower Mixing Rice Flour With Avacardo Pulp Fried Tacos With
            Tomatao Salad Nobis Ancillae Liberavisse Adversarium
          </div>
        ) : (
          <div className=" py-5 flex flex-col gap-2">
            <div className=" flex gap-3 items-center">
              <div className=" w-[25%]">
                <img
                  className=" w-full h-[60px]"
                  src="https://1.bp.blogspot.com/-nraAjS0I8xo/WXTEkMxGVTI/AAAAAAAADaE/mSCJHe8LuAELOldY6Bv6prEEwAsE1K9pQCLcBGAs/s100-c/blue-1326154_1280.jpg"
                  alt=""
                />
              </div>
              <p className=" w-[75%] text-sm hover:text-yellow-400">
                Let's Cook Some Tasty Things With Chef Charlie
              </p>
            </div>
            <div className=" flex gap-3  items-center ">
              <div className=" w-[25%]">
                <img
                  className=" w-full h-[60px]"
                  src="https://2.bp.blogspot.com/-GIVaJn2O21E/WXTEkH7EfkI/AAAAAAAADaA/xgvZXzW3oK0-NUMTZ-06ipXCCBI-94v-wCEwYBhgL/s100-c/broccoli-1974801_1280.jpg"
                  alt=""
                />
              </div>
              <p className=" w-[75%] text-sm hover:text-yellow-400">
                Mnesarchum consetetur modo dissentiunt reprehendunt
              </p>
            </div>
            <div className=" flex gap-3  items-center">
              <div className=" w-[25%]">
                <img
                  className=" w-full h-[60px]"
                  src="https://3.bp.blogspot.com/-KDjH8novw2I/WXTEk-qiyWI/AAAAAAAADaI/2OaNJXxFEqQ0NxKFcfhjltEu5xnUyZuBwCEwYBhgL/s100-c/fig-2079166_1280.jpg"
                  alt=""
                />
              </div>

              <p className=" w-[75%] text-sm hover:text-yellow-400">
                Mexican Snacks For The Kids
              </p>
            </div>
            <div className=" flex gap-3  items-center">
              <div className=" w-[25%]">
                <img
                  className=" w-full h-[60px]"
                  src="	https://3.bp.blogspot.com/-u0hSKZXuIQE/WXTEl2WrL0I/AAAAAAAADaY/vMGJ6yA6ZBUTbJFUdzrbRL8PCqCJFp98wCEwYBhgL/s100-c/food-715542_1280.jpg"
                  alt=""
                />
              </div>
              <p className=" w-[75%] text-sm hover:text-yellow-400">
                Mixed Veg Soup With Beans, Brinjal and Cauliflower
              </p>
            </div>
            <div className=" flex gap-3  items-center">
              <div className=" w-[25%]">
                <img
                  className=" w-full h-[60px]"
                  src="https://4.bp.blogspot.com/-mASzUoPBx3I/WXTElFjn6BI/AAAAAAAADaM/WpewIBmXP6c82lJxoj5eBmkf4J6o5-wHwCEwYBhgL/s100-c/food-1247612_1280.jpg"
                  alt=""
                />
              </div>
              <p className=" w-[75%] text-sm hover:text-yellow-400">
                Mixing Rice Flour With Avacardo Pulp
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Right;
