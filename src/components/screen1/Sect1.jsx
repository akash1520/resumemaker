import React from 'react'
import Picuploader from './Picuploader'
import { Profilesect } from './Profilesect'

export const Sect1 = () => {
  return (
    <>
      <div className="grid grid-rows-2 md:grid-cols-2"> {/*first section having two other sections*/}
        <Picuploader />
        <Profilesect />
      </div>
    </>
  )
}
