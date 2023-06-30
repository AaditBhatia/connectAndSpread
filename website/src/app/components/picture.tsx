import React from 'react';

import mypic from '..//assets/doghelp.jpeg'
import Image from 'next/image';

const MyImage = (props) => {
  return (
    <div className="w-full">
      <Image
        src={mypic}
        alt="Picture of the author"
        objectFit="cover"
        width={1450}
        height={500}
        className="object-cover"
        placeholder="blur"
        priority
      />
    </div>
  );
};

export default MyImage