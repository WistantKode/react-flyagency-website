import React from "react";

// import image grid
import imageGrid from "../../assets/about.png";

const Lounge = () => {
    return (
        <div className='lounge container section'>
            <div className="sectionContainer grid">

                <div className="imgDiv">
                    <img src={imageGrid} alt=""/>
                </div>

                <div className="textDiv">
                    <h2>Unaccompanied Minor Lounge</h2>

                    <div className="grids grid">

                        <div className="singleGrid">
                        <span className="gridTitle">
                            Help trough the airport
                        </span>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum.
                                Lorem ipsum dolor sit amet, Lorem.
                            </p>
                        </div>

                        <div className="singleGrid">
                        <span className="gridTitle">
                            Help trough the airport
                        </span>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum.
                                Lorem ipsum dolor sit amet, Lorem.
                            </p>
                        </div>

                        <div className="singleGrid">
                        <span className="gridTitle">
                            Help trough the airport
                        </span>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum.
                                Lorem ipsum dolor sit amet, Lorem.
                            </p>
                        </div>

                        <div className="singleGrid">
                        <span className="gridTitle">
                            Help trough the airport
                        </span>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum.
                                Lorem ipsum dolor sit amet, Lorem.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Lounge;