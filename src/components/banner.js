import React from 'react'
import {Link} from 'gatsby'
import  ImgBanner from '../../static/banner/banner_img.png'

const Banner = ()=>{
    return (
        <>
            <section className="banner-section">
                <div className="container-gt">
                    <div className="grid-two-columns" id="banner-layout-responsive">
                        
                        <div className="left-col">
                            <div className="banner-content-wrapper">
                                <h1>
                                    <span>In a parallel universe </span> 
                                    <span>where humans evolved not only from apes</span>
                                </h1>
                                <p>
                                but also cats, dogs, bears, weasels, and other animals, Duke Hazzard, a feline private eye, is hired to find the murderer of a prominent canine. It’s a tongue-in-cheek, fun murder mystery. 
                                </p>
                                <button>
                                    <Link to="/about-the-book">
                                        Read More
                                    </Link>
                                </button>
                            </div>
                        </div>

                        <div className="right-col banner-img">
                            <img src={ImgBanner}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;