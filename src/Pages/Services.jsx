import React from 'react';

const ServiceCard = ({ price, title, link, delay }) => {
  return (
    <div className={`col-md-6 col-sm-6 wow fadeInUp animate__animated animate__delay-${delay}`}>
      <div className="Hii hover:bg-purple-800">
        <a href={link}>
          <div className="mousehvr">
            <h4 className="text-purple-200">{price}</h4>
            
            <p className="text-green-200">   Book your consultation today!   </p>
          </div>
        </a>
      </div>
      <div className="description">
        <h4>{title}</h4>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="team" className="bg-green-200 bg-cover"  style={{ backgroundImage: 'url("../src/assets/bgi2.webp")' }}>
      
        <div className="text-center py-40">
          <h3 className="text-4xl font-bold text-green-900 mb-40 animate__animated animate__fadeIn animate__delay-1s">Our Speciality</h3>
          <div className="flex flex-wrap justify-center ">
          <div className="container mx-auto py-8">
         
            <ServiceCard price="Starting From ₹250" title="Teeth Cleaning" link="Login.aspx" delay="0.4s" />
            <ServiceCard price="Starting From ₹1,500" title="Veneers & Crowns" link="Login.aspx" delay="0.6s" />
            <ServiceCard price="Starting From ₹2000" title="Root Canals" link="Login.aspx" delay="0.2s" />
            <ServiceCard price="Starting From ₹200" title="X-Ray" link="Login.aspx" delay="0.4s" />
            <ServiceCard price="Starting From ₹2,500" title="Mouth Guards" link="Login.aspx" delay="0.6s" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
