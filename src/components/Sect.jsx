import React from 'react';
import PicUploader from './Picuploader';

export const Sect = () => {
  return (
    <div className='w-screen h-screen grid grid-rows-2 md:grid-cols-2 bg-gray-300'> {/*div having two sections*/}
    <div className=' w-full h-full centered md:h-screen'>
        <PicUploader/>
    </div>

    {/* page 2 */}
    <div className='w-full h-full centered md:h-screen'>
        <p>Page 2</p>
    </div>
</div>
  )
}
