import React, { useState } from "react";
function Home() {
  // Menu button toggle
  const [menu, setmenu] = useState(false);
  return (
    <div className="h-screen" >
      {/* Navbar */}
      <header
        className={`sm:flex b flex-row w-full fixed top-0 left-0 bg-white shadow-md justify-between  items-center p-4 sm:px-14 ${menu}?'h-full block':'h-16'`}
      >
        {/* Website Logo */}
        <div>
          <img
            src="/src/assets/Main-Logo.png"
            alt="logo"
            className="w-20 h-14 cursor-pointer"
          />
        </div>
        {/* Menu button */}
        <i
  className={`${
    menu ? 'fa-regular fa-rectangle-xmark' : 'fa-solid fa-bars'
  } text-black sm:hidden cursor-pointer absolute right-8 top-8`}
  onClick={() => {
    setmenu(!menu);
  }}
></i>
        {/* Navigation links */}
        <nav
          className={`sm:flex sm:flex-row transition-all duration-100 ease-in ${menu}?'top-20':'top-[-120px]' justify-center flex-col h-full items-center uppercase font-medium ${
            menu ? "" : "hidden"
          }`}
        >
          {menu && (
            <ul className={` sm:flex-row w-full sm:w-auto `}>
              <a href="#home" className="block my-4 sm:my-0 text-center hover:underline">HOME</a>
              <a href="#work" className="block my-4 sm:my-0 text-center hover:underline">WORK</a>
              <a href="#about" className="block my-4 sm:my-0 text-center hover:underline">About</a>
              <a href="#contact" className="block my-4 sm:my-0 text-center hover:underline">CONTACT</a>
            </ul>
          )}
          <ul
            className={`hidden sm:flex flex-col sm:flex-row w-full sm:w-auto `}
          >
            <a href="#home" className="mx-4 hover:underline hover:text-blue-500 transition-all cursor-pointer">
              Home
            </a>
            <a href="#work" className="mx-4 hover:underline hover:text-blue-500 transition-all cursor-pointer">
              work
            </a>
            <a href="#about" className="mx-4 hover:underline hover:text-blue-500 transition-all cursor-pointer">
              about
            </a>
            <a href="#contact" className="mx-4 hover:underline hover:text-blue-500 transition-all cursor-pointer">
              Contact
            </a>
          </ul>
        </nav>
      </header>

      {/* Main home body */}
      <main id="home" className="text-center md:text-left p-4 pt-2 md:flex lg:mx-32 md:mx-20 sm:mx-10 h-5/6 justify-center items-center mt-20 sm:mt-20">
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
