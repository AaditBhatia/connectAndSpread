import React from 'react';
import mypic from '..//assets/mewatwomen2.jpg'
const StretchedImage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-h-full relative">
        <img
          src="{mypic}"
          alt="Stretched Image"
          className="h-full w-auto absolute inset-0"
          style={{ objectFit: 'cover', transform: 'scaleY(1.5)' }}
        />
      </div>
    </div>
  );
};

export default StretchedImage;