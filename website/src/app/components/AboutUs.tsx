import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-pink-50 h-56">
        {/* Content for the text block */}
        <div className="container mx-auto py-8">
          <h2 className="text-2xl font-bold text-black">About us</h2>
          <p className="text-gray-500">2 sentence description or text here</p>
        </div>
      </div>
    </div>

  );
};

export default AboutUs;