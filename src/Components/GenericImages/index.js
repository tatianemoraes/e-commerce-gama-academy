import React from 'react';

import { Image } from './style';

function GenericImages({ path, alt }) {
  return (
    <>
      <Image src={path} alt={alt} />
    </>
  );
}

export default GenericImages;