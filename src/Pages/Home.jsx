import React from 'react'

export default function Home() {
  const backgroundStyle = {
    backgroundImage: 'url("../src/assets/bgggg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={backgroundStyle}>welcome to my site</div>
  )
}
