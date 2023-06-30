import React from 'react';
import Image from 'next/image'
import mypic from '..//assets/mewatwomen2.jpg'
const OurProjectsPic = (props) => {
  return (
    <Image
      src={mypic}
      alt="Picture of the author"
      className="max-w-full max-h-full"
      placeholder="blur" // placeholder="empty"
      priority //lazy,eager
    />
  )
}
export default OurProjectsPic