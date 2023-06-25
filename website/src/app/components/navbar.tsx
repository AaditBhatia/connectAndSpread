import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-lg">Logo</div>
          <ul className="flex space-x-4 justify-center">
            <li>
              <a className="text-white hover:text-gray-300" href="#">Home</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300" href="#">About</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300" href="#">Services</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;