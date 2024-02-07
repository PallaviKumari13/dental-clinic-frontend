import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



export default function Slider() {
    return (
        <Carousel autoPlay showArrows={false} showStatus={false} infiniteLoop stopOnHover={false} showThumbs={false} width={"100%"}>
            <div className=''>
                <img className='rounded-xl max-h-[80vh]' src="../src/assets/123.jpg" />
            </div>
            <div>
                <img className='rounded-xl max-h-[80vh]' src="../src/assets/bgi3.avif" />
            </div>
            <div>
                <img className='rounded-xl max-h-[80vh]' src="../src/assets/teeth3.jpeg" />
            </div>
        </Carousel>
    )
}
