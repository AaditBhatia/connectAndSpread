import React from 'react';
import Logo from './logo';
const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-purple-50" style={{ height: '12vh' }} >
      <nav className="relative w-full h-15 bg-emarald-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
          <div className="text-white font-bold text-lg h-auto w-auto">
              <Logo />
          </div>
          <ul className="flex space-x-4 justify-center">
            <li>
              <a className="text-black hover:text-gray-300" href="#">Home</a>
            </li>
            <li>
              <a className="text-black hover:text-gray-300" href="#">About</a>
            </li>
            <li>
              <a className="text-black hover:text-gray-300" href="#">Our Projects</a>
            </li>
            <li>
              <a className="text-black hover:text-gray-300" href="#">Blog</a>
            </li>
            <li>
              <a className="text-black hover:text-gray-300" href="#">Donate</a>
            </li>
            <li>
              <a className="text-black hover:text-gray-300" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;