import React, { Component } from "react";
import banner from "./../assets/one.jpg";

function Contact() {
  return (
    <section id="contact" className="text-center md:text-left p-4 pt-2 h-max sm:mx-10 lg:mx-32 md:mx-20">
      <h1 className="capitalize text-4xl font-bold mb-4">Contact us.</h1>
      <p className=" font-medium mb-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit qui
        dignissimos repudiandae aspernatur, porro, minus error incidunt nobis
        natus architecto assumenda necessitatibus excepturi rerum sequi magnam
        iusto aliquam nam. Deserunt.
      </p>
      <div className="lg:flex lg:justify-between justify-center">
        <div>
          <h3 className="capitalize font-bold text-3xl">Send us message</h3>
          <form action="" className="pr-4">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="bg-slate-200 my-2 outline-1 p-3 rounded-md w-full"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="bg-slate-200 my-2 outline-1 p-3 rounded-md w-full"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Message.."
              className="bg-slate-200 my-2 outline-1 p-3 rounded-md w-full"
              rows={5}
            ></textarea>
            <button className="bg-blue-500 text-white  my-4 px-4 py-2 rounded-md font-medium hover:bg-blue-600 transition-all">
              Send
            </button>
          </form>
        </div>
        <img src={banner} alt="image" className="h-80 w-fit justify-self-center object-scale-down hover:scale-110 transition-all"/>
      </div>
      <div className="flex justify-center items-center my-4">
        <i className="fa-brands fa-square-facebook mx-3 text-3xl hover:text-blue-500 transition-all"></i>
        <i className="fa-brands fa-square-instagram mx-3 text-3xl hover:text-blue-500 transition-all"></i>
        <i className="fa-brands fa-youtube mx-3 text-3xl hover:text-blue-500 transition-all"></i>
      </div>
    </section>
  );
}

export default Contact;
