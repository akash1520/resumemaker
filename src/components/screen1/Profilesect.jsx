import React from 'react'

export const Profilesect = () => {
  return (
    <div className="grid w-full h-full grid-md-cols-2">{/*page 1*/}
        <form className='grid my-auto mx-1 gap-1'>
            <label className='grid grid-cols-2 mx-auto'>
                <h3><b>Your Name:</b></h3>
                <input type="text" className='rounded-md'>
                </input>
            </label>
            <label className='grid grid-cols-2 mx-auto'>
                <h3><b>Your Title:</b></h3>
                <input type="text" className='rounded-md'>
                </input>
            </label>
            <label className='grid grid-cols-2 mx-auto'>
                <h3 className='my-auto'><b>Your Profile:</b></h3>
                <textarea rows="5" cols="25" className='rounded-md'>
                </textarea>
            </label>
        </form>
    </div>
  )
}
