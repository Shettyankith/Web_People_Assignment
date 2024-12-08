import React, { Component } from 'react';

function About() {
    return ( 
        <section className='text-center md:text-left p-4 pt-2 h-max sm:mx-10 lg:mx-32 md:mx-20'>
            <h1 className='capitalize text-4xl font-bold mb-4'>About us.</h1>
            <p className=' font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit qui dignissimos repudiandae aspernatur, porro, minus error incidunt nobis natus architecto assumenda necessitatibus excepturi rerum sequi magnam iusto aliquam nam. Deserunt.</p>
            <div className=' lg:flex my-4 lg:justify-evenly '>
                <div className='m-4 sm:basis-1/2  object-scale-down hover:scale-110 transition-all flex flex-col justify-center items-center'>
                    <img src="/src/assets/four.jpg" alt="image" className='h-80 w-56'/>
                    <div className='bg-blue-500 text-center p-4 hover:bg-blue-600 w-56 transition-all'>
                        <p className='text-black font-bold'>Luke Skywalker</p>
                        <p className='text-white font-meduim'>Web Designer</p>
                    </div>
                </div>
                <div className='m-4 sm:basis-1/2 sm:h-50 object-scale-down hover:scale-110 transition-all flex flex-col justify-center items-center'>
                    <img src="/src/assets/five.jpg" alt="image" className='h-80 w-56'/>
                    <div className='bg-blue-500 text-center p-4 hover:bg-blue-600 w-56 transition-all'>
                        <p className='text-black font-bold'>Luke Skywalker</p>
                        <p className='text-white font-medium'>Web Designer</p>
                    </div>
                </div>
                <div className='m-4 baisi-1/4 shrink sm:h-50'>
                    <h3 className='capitalize font-bold text-3xl my-4'>Little about us</h3>
                    <p className='font-medium my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut veniam eligendi, atque provident vel aliquid esse animi cum amet cupiditate dolorem in doloribus facilis neque maiores magnam illum nihil est.</p>
                    <p className='font-normal cursor-pointer'>Read more...</p>
                </div>
            </div>
        </section>
     );
}

export default About;