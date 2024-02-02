import React from 'react'

export default function Card({title,image}) {
  return (
    <div className='backdrop-blur shadow-gray-600 shadow-lg
    rounded-md bg-purple-300 p-10  m-10 bg-opacity-30
    '>

        <img src={image} alt="" />

       {title}

        
        
    </div>
  )
}
