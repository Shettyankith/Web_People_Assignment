import React, { Component } from "react";
import work1 from "./../assets/work1.jpg";
import work2 from "./../assets/work2.jpg";
import work3 from "./../assets/work3.jpg";
import work4 from "./../assets/work4.jpg";
import work5 from "./../assets/work5.jpg";
import work6 from "./../assets/work6.jpg";
import logo1 from "./../assets/Logo-1.png";
import logo2 from "./../assets/Logo-2.png";
import logo3 from "./../assets/Logo-3.png";
import logo4 from "./../assets/Logo-4.png";
import logo5 from "./../assets/Logo-5.png";


function Work() {
  return (
    <section id="work" className="text-center md:text-left p-4 pt-2 h-max lg:mx-32 md:mx-20 sm:md-10 ">
      <h1 className="uppercase text-3xl font-bold my-4">work showcase.</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-fit">
        <div className="bg-blue-500 hover:bg-blue-600 transition-all text-3xl text-white flex items-center justify-center col-span-1 md:row-span-2 h-46">
          <div className="text-center font-bold">
            <p className="tracking-[1rem] md:tracking-[1.5rem]">ARTWORK</p>
            <p className="text-xl font-medium">BRANDING</p>
          </div>
        </div>

        <div className="h-46 col-span-1 md:row-span-2 flex items-center justify-center">
          <img
            src={work6}
            alt="image"
            className="h-full w-full object-scale-down hover:scale-105 transition-all"
          />
        </div>

        <div className="h-46 col-span-1 md:row-span-2 flex items-center justify-center">
          <img
            src={work2}
            alt="image"
            className="h-full w-full object-scale-down hover:scale-105 transition-all"
          />
        </div>

        <div className="h-46 col-span-1 md:row-span-2 flex items-center justify-center">
          <img
            src={work3}
            alt="image"
            className="h-full w-full object-scale-down hover:scale-105 transition-all"
          />
        </div>

        <div className="h-46 col-span-1 md:row-span-2 flex items-center justify-center">
          <img
            src={work4}
            alt="image"
            className="h-full w-full object-scale-down hover:scale-105 transition-all"
          />
        </div>

        <div className="h-46 col-span-1 md:row-span-4 flex items-center justify-center">
          <img
            src={work5}
            alt="image"
            className="h-full w-full object-scale-down hover:scale-105 transition-all"
          />
        </div>
      </div>

      <button className="bg-blue-500 text-white my-4 px-4 py-2 rounded-md font-medium hover:bg-blue-600 transition-all">
        Show me more
      </button>

      <div className="flex my-6 justify-center items-center flex-wrap">
        <img
          src={logo1}
          alt="image"
          className="mx-5 object-scale-down hover:scale-110 transition-all"
        />
        <img
          src={logo2}
          alt="image"
          className="mx-5 object-scale-down hover:scale-110 transition-all"
        />
        <img
          src={logo3}
          alt="image"
          className="mx-5 object-scale-down hover:scale-110 transition-all"
        />
        <img
          src={logo4}
          alt="image"
          className="mx-5 object-scale-down hover:scale-110 transition-all"
        />
        <img
          src={logo5}
          alt="image"
          className="mx-5 object-scale-down hover:scale-110 transition-all"
        />
      </div>
    </section>
  );
}

export default Work;
