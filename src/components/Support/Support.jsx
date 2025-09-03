import React from "react";

// import images //
import gridImage from '../../assets/bg.png'

const Support = () => {
        return (
            <div className="support container section">
                <div className="sectionContainer">

                    <div className="titlesDiv">
                        <small>Travel Support</small>
                        <h2>Plan Your travel with confiance</h2>
                        <p> Find help Lorem ipsum dolor sit amet. Lorem ipsum.
                        the journey</p>
                    </div>

                    <div className="infoDiv grid">

                        <div className="textDiv grid">

                            <div className="singleInfo">
                                <span className="number">01</span>
                                <h4>Travel Requirements for Dubai</h4>
                                <p>
                                    Find help Lorem ipsum dolor sit amet. Lorem ipsum.
                                    the journey Lorem ipsum dolor.
                                </p>
                            </div>

                            <div className="singleInfo">
                                <span className="number colorOne">02</span>
                                <h4>Chauffeur services at your arrival</h4>
                                <p>
                                    Find help Lorem ipsum dolor sit amet. Lorem ipsum.
                                    the journey Lorem ipsum dolor.
                                </p>
                            </div>

                            <div className="singleInfo">
                                <span className="number colorTwo">03</span>
                                <h4>Multi risks travel insurance</h4>
                                <p>
                                    Find help Lorem ipsum dolor sit amet. Lorem ipsum.
                                    the journey Lorem ipsum dolor.
                                </p>
                            </div>

                        </div>

                        <div className="imgDiv">
                            <img src={gridImage} alt=""/>
                        </div>
                    </div>

                </div>
            </div>
        )
}

export default Support;