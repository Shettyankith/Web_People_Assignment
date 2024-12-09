import React, { Component } from 'react';
import logo from "./../assets/Main-Logo-Footer.png";

function Footer() {
    return ( 
    <footer className='bg-black sm:flex justify-between items-center px-2 sm:px-6 p-4 text-center'>
        <div className='flex sm:flex-row flex-col justify-center items-center '>
            <img src={logo} alt="logo" className='h-16 self-center'/>
            <p className='text-white font-medium '>Service at best!</p>
        </div>
        <p className='text-white font-medium'>Puttur, Dakshina Kannada</p>
    </footer> );
}

export default Footer;