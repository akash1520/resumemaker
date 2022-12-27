import React from 'react'
import { Profile } from './Profile'
import { Profilepic } from './Profilepic'


export const Sect2 = () => {
    return (
        <>
            <div className='grid w-3/5 mx-auto my-12 border-double border-2 border-black'>
                <Profilepic />
                <Profile />
            </div>
        </>
    )
}
