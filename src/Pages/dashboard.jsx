import React from 'react'

export default function dashboard() {
  function logout (){
   localStorage.removeItem("userToken")

  }
  return (
    <div>
      <button onClick={e}>logout</button>
    </div>
  )
}
