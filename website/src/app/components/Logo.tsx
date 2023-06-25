import React from 'react';
import Image from 'next/image'
import logo from '..//assets/logo2.jpg'
const Logo = (props) => {
    const containerStyle = {
        height: '12vh',
        width: '10vw',
    };

    return (
      <Image
        src={logo}
        style={containerStyle}
        alt="Picture of the author"
        className="max-w-full max-h-full"
        placeholder="blur" // placeholder="empty"
        priority //lazy,eager
      />
    )
  }

export default Logo;