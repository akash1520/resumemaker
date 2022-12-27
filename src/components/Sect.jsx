import React from 'react';
import { Sect1 } from './screen1/Sect1';
import { Sect2 } from './screen2/Sect2';

export const Sect = () => {
  return (
    <div className='w-screen h-screen grid grid-rows-2 md:grid-cols-2 overflow-hidden'> {/*div having two sections*/}
      <div className=' w-full h-full centered md:h-screen bg-gradient-to-r from-cyan-500 to-blue-300 border-2 border-blue-900'>
        <Sect1 />
      </div>
      {/* page 2 */}
      <div className='w-full h-full centered md:h-screen border-2'>
        <Sect2 />
      </div>
    </div>
  )
}
