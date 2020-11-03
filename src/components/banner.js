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
                                    <span>Think of it as Philip Marlowe</span> 
                                    <span>meets Fritz the Cat.</span>
                                </h1>
                                <p>
                                    Hey you big old snow leopard, come on over here, and let me buy you a drink. I’ve been looking for someone just your size and smarts,
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