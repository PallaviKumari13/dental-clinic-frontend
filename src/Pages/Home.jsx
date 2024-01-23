import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from '../Components/Slider';
import Card from '../Components/Card';
import Footer from '../Components/Footer';
import treatment from "../assets/bgggg.jpg"
import cure from "../assets/bggg.jpeg"
import cavity from "../assets/teeth1.jpeg"


export const Home = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <div className='max-h-[80vh] w-[80%]  flex justify-center items-center'>
                <Slider />
            </div>

            <div className='h-[20vh] flex items-center bg-purple-300 w-full justify-center mt-4'>
                <h1 className='text-center text-blue-900 text-3xl font-display'>
                    Better Teeth, <br /> Healthy Teeth.
                </h1>
            </div>

            <div className='flex flex-row'>
                <Card title={"Braces"} image={treatment} />
                <Card title={"teeth filling"} image={cure} />
                <Card title={"Cavities"} image={cavity} />
            </div>

        </div>
    )
}

