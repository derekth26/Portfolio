import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white py-8 p-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-4 md:mb-0">
          
          <ul className="mt-2">
          <li>
            <a href="#" className="block md:inline-block hover:text-lightgray transition duration-300">Home</a>
          </li>
          <li>
            <a href="#synopsis" className="block md:inline-block hover:text-lightgray transition duration-300">Synopsis</a>
          </li>
          <li>
            <a href="#crew" className="block md:inline-block hover:text-lightgray transition duration-300">Crew</a>
          </li>
          <li>
            <a href="#cast" className="block md:inline-block hover:text-lightgray transition duration-300">Cast</a>
          </li>
          <li>
            <a href="#photos" className="block md:inline-block hover:text-lightgray transition duration-300"  >Photos</a>
          </li>
          <li>
            <a href="#specs" className="block md:inline-block hover:text-lightgray transition duration-300">Details</a>
          </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold text-center font-headings">Socials</h3>
          <div className="flex space-x-4 mt-2 list-none">
          <li>
            <a href="#" className="block md:inline-block hover:text-lightgray transition duration-300"><FaFacebook size={24} /></a>
          </li>
          <li>
            <a href="#synopsis" className="block md:inline-block hover:text-lightgray transition duration-300"><FaTwitter size={24} /></a>
          </li>
          <li>
            <a href="#crew" className="block md:inline-block hover:text-lightgray transition duration-300"><FaInstagram size={24} /></a>
          </li>
          <li>
            <a href="#cast" className="block md:inline-block hover:text-lightgray transition duration-300"><FaLinkedin size={24} /></a>
          </li>
        
          </div>
        </div>

        {/* Copyright Section */}
        <div>
          <p className="text-gray-400 text-sm font-headings">
            &copy; {new Date().getFullYear()} FunProject. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
