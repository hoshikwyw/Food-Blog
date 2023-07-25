import React from "react";
import Right from "../components/home-components/Right";

const Contact = () => {
  return (
    <div className=" flex flex-col md:flex-row lg:flex-row gap-3 mt-0 m-2 ">
      {/* left side  */}
      <div className="  md:w-[68%] lg:w-[68%] px-8 flex flex-col gap-5 rounded">
        <h2 className=" text-2xl font-semibold tracking-widest font-serif text-center">
          Contact Me
        </h2>
        <p className=" text-center font-semibold tracking-wider text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div>
          <div className=" ps-5">
            <h2 >
              <span className=" uppercase font-semibold text-lg">address :</span> <span className=" text-slate-400 italic">Lorem 15 Str., 4844, Ipsum, State, UK</span>
            </h2>
            <h2 >
              <span className=" uppercase font-semibold text-lg"> phone :</span> <span className=" text-slate-400 italic"> +30-2106019311</span>
            </h2>
          </div>
        </div>
        <hr className=" w-40 mx-auto h-[3px] bg-slate-200" />
        <div>
          <form className=" flex flex-col gap-5 mx-5">
            <div>
              <label
                htmlFor="username"
                className="block text-gray-500 italic mb-2">
                Your Name ( required )
              </label>
              <input
                type="text"
                className=" border rounded py-2 px-3 text-gray-700 leading-tight w-[40%] focus:outline-yellow-200 focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-gray-500 italic mb-2">
                E-Mail ( required )
              </label>
              <input
                type="text"
                className=" border rounded py-2 px-3 text-gray-700 leading-tight w-[40%] focus:outline-yellow-200 focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-gray-500 italic mb-2">
                Subject
              </label>
              <input
                type="text"
                className=" border rounded py-2 px-3 text-gray-700 leading-tight w-[40%] focus:outline-yellow-200 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-gray-500 italic mb-2">
                Your Message
              </label>
              <textarea className=" resize border rounded px-3 py-2 focus:outline-yellow-200 focus:outline-none"></textarea>
            </div>
          </form>
          <button className=" uppercase mx-5 my-5 bg-slate-400 text-white font-semibold px-3 py-1 rounded hover:bg-yellow-500 ">
            send message
          </button>
        </div>
      </div>
      {/* right side  */}
      <div className=" md:w-[30%] lg:w-[30%]">
        <Right />
      </div>
    </div>
  );
};

export default Contact;
