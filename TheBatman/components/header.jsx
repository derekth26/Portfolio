import { useState } from 'react';
import logo from "../assets/logo.jpg"; // Assuming the logo path is correct

function Header() {
  // State to handle menu visibility
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black p-4 font-p text-m">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="navbar-brand">
          <img src={logo} alt="logo" className="h-20 w-20 " />
        </a>

        {/* Hamburger Menu Button (only visible on small screens) */}
        <button 
          className="text-white md:hidden text-3xl" // hidden on medium and larger screens
          onClick={() => setIsOpen(!isOpen)} // Toggle menu
        >
          {isOpen ? '✖' : '☰'} {/* Shows "X" if menu is open, "☰" otherwise */}
        </button>

        {/* Links (visible on medium to large screens) */}
        <ul className={`md:flex md:space-x-6 hidden text-white font-p ${isOpen ? 'block' : 'hidden'}`}>
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
            <a href="#specs" className="block md:inline-block hover:text-lightgray transition duration-300">Details</a>
          </li>
          <li>
            <a href="#photos" className="block md:inline-block hover:text-lightgray transition duration-300"  >Photos</a>
          </li>
          
        </ul>
      </div>

      {/* Mobile Menu (only visible on small screens, toggles when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="space-y-2 mt-4 text-white font-p text-center">
            <li>
              <a href="#" className="block hover:text-gray-400">Home</a>
            </li>
            <li>
            <a href="#synopsis" className="block md:inline-block hover:text-gray-400">Synopsis</a>
          </li>
          <li>
            <a href="#crew" className="block md:inline-block hover:text-gray-400">Crew</a>
          </li>
          <li>
            <a href="#cast" className="block md:inline-block hover:text-gray-400">Cast</a>
          </li>
          <li>
            <a href="#photos" className="block md:inline-block hover:text-gray-400">Photos</a>
          </li>
          <li>
            <a href="#specs" className="block md:inline-block hover:text-gray-400">Details</a>
          </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
