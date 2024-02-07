import React from 'react'

export default function Card({title,image}) {
  return (
    <div className='backdrop-blur shadow-gray-900 shadow-lg
    rounded-md bg-gray-500 p-10  m-10 bg-opacity-30
    '>

        <img src={image} alt="" />

       {title}

        
        
    </div>
  )
}
