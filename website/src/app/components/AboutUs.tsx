import React from 'react';

const AboutUs = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="bg-pink-50 h-1/3">
        {/* Content for the text block */}
        <div className="container mx-auto pt-8 ">
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="text-gray-500">2 sentence description or text here</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;