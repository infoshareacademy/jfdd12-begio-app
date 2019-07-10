import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.css";
import "react-responsive-carousel/lib/styles/main.css";
import "react-responsive-carousel/lib/styles/main.min.css";
import { Carousel } from 'react-responsive-carousel';

export function PhotoGallery(props) {
    return <>
        <div style={{
            width: "50%",
            margin: "0 auto"
        }}>

            <Carousel

                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}

            >

                <div  >
                    <img alt="d" src={props.one} />

                </div>
                <div>
                    <img alt="sd" src={props.two} />

                </div>
                <div>
                    <img alt="sd" src={props.three} />

                </div>
            </Carousel>
        </div >
    </>
}

