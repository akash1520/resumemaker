import React from 'react'

export const Profilesect = () => {
  return (
    <div className="grid w-full h-full grid-md-cols-2">
        <form className='grid my-auto gap-1'>
            <label className='grid grid-cols-2'>
                <span><b>Your Name:</b></span>
                <input type="text" className='rounded-md'>
                </input>
            </label>
            <label className='grid grid-cols-2'>
                <span><b>Your Title:</b></span>
                <input type="text" className='rounded-md'>
                </input>
            </label>
            <label className='grid grid-cols-2'>
                <h3 className='my-auto'><b>Your Profile:</b></h3>
                <textarea rows="5" className='rounded-md'>
                </textarea>
            </label>
        </form>
    </div>
  )
}
