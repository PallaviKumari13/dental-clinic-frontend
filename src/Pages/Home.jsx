import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from '../Components/Slider';
import Card from '../Components/Card';
import Footer from '../Components/Footer';
import treatment from "../assets/teethh.jpeg";
import cure from "../assets/bgi2.webp";
import cavity from "../assets/teeth1.jpeg";


const Home = ({Token})  => {
    return (
        <div className = 'bg-green-900 '>
        
        <div className='flex justify-center items-center flex-col'>
            <div className='max-h-[80vh] w-[100%]  flex justify-center items-center'>
                <Slider />
            </div>
            </div>
            <div className='h-[10vh] flex items-center bg-green-500 w-full justify-center mt-4'>
                <h1 className='text-center text-blue-900 text-2xl font-display'>
                    Better Teeth,  Healthy Teeth.
                </h1>
            </div>

            <div className='flex flex-row'>
                <Card title={"Braces"} image={treatment} />
                <Card title={"Teeth Filling"} image={cure} />
                <Card title={"Cavities"} image={cavity} />
            </div>
        </div>
    );
}


export default Home;