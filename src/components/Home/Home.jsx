import React from "react";

// import assets
import video from '../../assets/video.mp4';
import aeroplane from '../../assets/air-plane.jpg';

const Home = () => {
    return (
        <div className="home flex container">

            <div className="mainText">
                <h1>Create Lorem ipsum dolor Lorem ipsum.</h1>
            </div>

            <div className="homeImages flex">

                <div className="videoDiv">
                    <video src={video} autoPlay muted loop className="video"></video>
                </div>

                <img src={aeroplane} alt="" className="plane"/>
            </div>
        </div>
    )
}
export default Home;