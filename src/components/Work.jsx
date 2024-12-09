import React, { Component } from "react";

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
            src="/src/assets/work6.jpg"
            alt="image"
            className="h-full w-full object-scale-down hover:scale-105 transition-all"
          />
        </div>

        <div className="h-46 col-span-1 md:row-span-2 flex items-center justify-center">
          <img
            src="/src/assets/work2.jpg"
            alt="image"
            className="h-full w-full object-scale-down hover:scale-105 transition-all"
          />
        </div>

        <div className="h-46 col-span-1 md:row-span-2 flex items-center justify-center">
          <img
            src="/src/assets/work3.jpg"
            alt="image"
            className="h-full w-full object-scale-down hover:scale-105 transition-all"
          />
        </div>

        <div className="h-46 col-span-1 md:row-span-2 flex items-center justify-center">
          <img
            src="/src/assets/work4.jpg"
            alt="image"
            className="h-full w-full object-scale-down hover:scale-105 transition-all"
          />
        </div>

        <div className="h-46 col-span-1 md:row-span-4 flex items-center justify-center">
          <img
            src="/src/assets/work5.jpg"
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
          src="/src/assets/Logo-1.png"
          alt="image"
          className="mx-5 object-scale-down hover:scale-110 transition-all"
        />
        <img
          src="/src/assets/Logo-2.png"
          alt="image"
          className="mx-5 object-scale-down hover:scale-110 transition-all"
        />
        <img
          src="/src/assets/Logo-3.png"
          alt="image"
          className="mx-5 object-scale-down hover:scale-110 transition-all"
        />
        <img
          src="/src/assets/Logo-4.png"
          alt="image"
          className="mx-5 object-scale-down hover:scale-110 transition-all"
        />
        <img
          src="/src/assets/Logo-5.png"
          alt="image"
          className="mx-5 object-scale-down hover:scale-110 transition-all"
        />
      </div>
    </section>
  );
}

export default Work;
