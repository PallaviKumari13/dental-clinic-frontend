import React from 'react';

export default function AboutUs(){
  return (
    <div className = 'bg-green-300 bg-cover style={{ backgroundImage: url("../src/assets/.jpg")}}'>
    <div className="container mx-auto p-8">
      {/* ABOUT */}
      <section id="about" className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Krishna Dental Clinic</h2>
        <p className="text-gray-700">
          Dr. Krishna Kumar is a highly skilled dentist in Patna, Bihar, with years of experience in examining patients. He maintains, develops, and works with his vast professional knowledge and skills using the latest technology. Dr. Krishna and his staff treat patients like family. His clinic is equipped with the latest tools and technology to provide high-quality care.
        </p>
      </section>

      {/* CLINIC */}
      <section id="clinic" className="flex mb-8">
        <div className="w-1/2 pr-4">
          <img src="../src/assets/teethhh.jpeg" className="w-full h-96 object-cover rounded-10" alt="Clinic Image" />
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-center">World-class clinic</h2>
          <p className="text-gray-700">
            Krishna Dental Clinic utilizes the latest technology and techniques to provide advanced, comprehensive oral healthcare. Equipped with state-of-the-art dental equipment and staffed by highly trained professionals, our clinic offers a wide range of procedures, including complex surgeries, implantology, cosmetic dentistry, orthodontics, and more. We also provide cutting-edge services such as digital dentistry, laser dentistry, and 3D imaging. Our in-house dental lab allows us to create custom dental prostheses like crowns, bridges, dentures, and orthodontic appliances.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">Gallery</h2>
        <div className="grid grid-cols-3 gap-4">
          <img src="../src/assets/teethh.jpeg" className="w-full h-64 object-cover rounded" alt="Gallery 1" />
          <img src="../src/assets/teeth1.jpeg" className="w-full h-64 object-cover rounded" alt="Gallery 2" />
          <img src="../src/assets/teeth3.jpeg" className="w-full h-64 object-cover rounded" alt="Gallery 3" />
          <img src="../src/assets/teeth 2.jpeg" className="w-full h-64 object-cover rounded" alt="Gallery 4" />
          <img src="../src/assets/bgi1.jpg" className="w-full h-64 object-cover rounded" alt="Gallery 5" />
          <img src="../src/assets/teeth.jpg" className="w-full h-64 object-cover rounded" alt="Gallery 6" />
        
        
        
          {/* Add more images as needed */}
        </div>
      </section>
    </div>
    </div>
  );
};


