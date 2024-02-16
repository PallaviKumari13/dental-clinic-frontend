import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from '../Components/Slider';
import Card from '../Components/Card';
import Footer from '../Components/Footer';
import treatment from "../assets/carrd.jpg";
import cure from "../assets/caard.jpg";
import cavity from "../assets/ccard.png";
import Cleaning from "../assets/card2.png";


const Home = ({ Token }) => {
    return (
        <div className='bg-green-900 '>

            <div className='flex justify-center items-center flex-col'>
                <div className='max-h-[80vh] w-[100%]  flex justify-center items-center'>
                    <Slider />
                </div>
            </div>
            <div className='h-[10vh] flex items-center bg-green-700 w-full justify-center mt-4'>

                <img src="../src/assets/lool.jpg" className="w-10 h-10 rounded-full h-10" />
                <h1 className='text-center text-white text-2xl font-display'>

                    "Better Teeth,  Healthy Teeth "         </h1>

                <img src="../src/assets/lool.jpg" className="w-10 h-10 rounded-full h-10" />
            </div>

            <div className='flex flex-row'>
                <Card title={"Braces"} image={treatment} />
                <Card title={"Teeth Filling"} image={cure} />
                <Card title={"Cavities"} image={cavity} />
                <Card title={"Cleaning"} image={Cleaning} />
            </div>
        </div>
    );
}


export default Home;