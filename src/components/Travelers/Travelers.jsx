import React from "react";

// import of images destinations
import paris from '../../assets/paris.jpg'
import london from '../../assets/london.jpg'
import dubai from '../../assets/dubai.jpg'
import ny from '../../assets/new-york.jpg'

// import traveler images
import man from '../../assets/user1.jpg'
import woman from '../../assets/user2.jpg'
import young from '../../assets/user3.jpg'


const travelers = [
    {
        id: 1,
        destinationImage: london,
        travelerImage: man,
        travelerName: 'Wist',
        socialLink: "@Wist",
    },

    {
        id: 2,
        destinationImage: dubai,
        travelerImage: woman,
        travelerName: 'Technology',
        socialLink: "@Technology",
    },

    {
        id: 3,
        destinationImage: ny,
        travelerImage: young,
        travelerName: 'Wist',
        socialLink: "@Wist",
    },

    {
        id: 4,
        destinationImage: paris,
        travelerImage: man,
        travelerName: 'Wist',
        socialLink: "@Wist",
    },
]


const Travelers = () => {
    return (
        <div className="travelers container section">
            <div className="sectionContainer">
                <h2>
                    Top Travelers this month!
                </h2>

                <div className="travelersContainer grid">
                    {
                        travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink}) => {
                            return (
                                <div key={id} className="singleTraveler">
                                    <img src={destinationImage} alt="" className="destinationImage"/>

                                    <div className="travelerDetails">
                                        <div className="travelerPicture">
                                            <img src={travelerImage} alt="" className='travelerImage' />
                                        </div>
                                        <div className="travelerName">
                                            <span>{travelerName}</span>
                                            <p>{socialLink}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Travelers;