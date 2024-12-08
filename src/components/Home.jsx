import React, { useState } from "react";
function Home() {
  // Menu button toggle
  const [menu, setmenu] = useState(false);
  return (
    <div className="h-screen">
      {/* Navbar */}
      <header
        className={`flex b flex-row w-full sticky bg-white shadow-md justify-between  items-center p-4 px-14 ${menu}?'h-full':'h-16'`}
      >
        {/* Website Logo */}
        <div>
          <img
            src="/src/assets/Main-Logo.png"
            alt="logo"
            className="w-20 h-14"
          />
        </div>
        {/* Menu button */}
        <i
          className={`fa-solid fa-bars text-black sm:hidden cursor-pointer`}
          onClick={() => {
            setmenu(!menu);
          }}
        ></i>
        {/* Navigation links */}
        <nav
          className={`sm:flex sm:flex-row justify-center flex-col h-full items-center uppercase font-medium ${
            menu ? "flex" : "hidden"
          }`}
        >
          {menu && (
            <ul className={` sm:flex-row w-full sm:w-auto `}>
              <li className="mx-4">Work</li>
              <li className="mx-4">About</li>
              <li className="mx-4">Blog</li>
              <li className="mx-4">Contact</li>
            </ul>
          )}
          <ul
            className={`hidden sm:flex flex-col sm:flex-row w-full sm:w-auto`}
          >
            <li className="mx-4 hover:underline hover:text-blue-500 transition-all cursor-pointer">
              Work
            </li>
            <li className="mx-4 hover:underline hover:text-blue-500 transition-all cursor-pointer">
              About
            </li>
            <li className="mx-4 hover:underline hover:text-blue-500 transition-all cursor-pointer">
              Blog
            </li>
            <li className="mx-4 hover:underline hover:text-blue-500 transition-all cursor-pointer">
              Contact
            </li>
          </ul>
        </nav>
      </header>

      {/* Main home body */}
      <main className="text-center md:text-left p-4 pt-2 md:flex lg:mx-32 md:mx-20 sm:mx-10 h-5/6 justify-center items-center">
        <div className="md:w-4/6 xl:w-3/5">
          <h1 className="font-bold text-3xl my-4 md:text-4xl leading-12">
            Hello!!!
          </h1>
          <h1 className="font-bold text-3xl md:text-4xl leading-10 mb-4 capitalize">
            We are creative digital agency.
          </h1>
          <p className="font-medium text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            vel corporis labore fuga officiis nesciunt ad perferendis est quasi,
            cum architecto quos eaque odit doloremque eum? Nesciunt consectetur
            eum nam!
          </p>
          <button className="bg-blue-700 px-4 py-2 font-medium text-white rounded-md hover:bg-blue-800 mt-2 mb-4 transition-all">
            Send Message
          </button>
        </div>
        <div className="mb-4">
          <img
            src="/src/assets/two.jpg"
            alt="image"
            className="object-scale-down hover:scale-110 transition-all"
          />
        </div>
      </main>
    </div>
  );
}

export default Home;
