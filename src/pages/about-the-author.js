import React, {useState, useEffect} from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/main_author.jpg'


/*Slick*/
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Helmet} from "react-helmet"

/* 
    Author Images
*/

const ATB = (props)=>{

    const [mobState, __functState] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", ()=>{ 
            __functState(window.innerWidth <= 990);
        });

    }, [mobState]); 


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: (mobState) ? 1 : 3,
        slidesToScroll: 1,
     };
	
	return (
		<>
		 	<Layout>
                <Helmet title="About the Author | Chip Weinert" />
		 		<Nav pathExt={props.path}/>
                 <Banner 
                 spanFirst={`About The`}
                 contextHeading={`Author`}/>

		 		<div className="container">
				    <section className="body-author-contents columns">

                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>

                            <div className="heading-quote">
                                <h4>
                                "Hey you big old snow leopard, come on over here, and let me buy you a drink. I’ve been looking for someone just your size and smarts.” 
                                </h4>
                                
                                <span className="ata-span-fx"></span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                        <br/>
                        <br/>
                            <p>
                            Chip Weinert grew up in Wisconsin before getting his degree in Communication from Utah State University. After college, he moved to Miami and worked writing ad copy for mail order catalogs. He left Miami and headed back out west, this time landing in Hood River, Oregon after a couple years in Seattle. In Hood River he worked for the Hood River News before becoming Managing Editor/Associate Publisher of Wind Tracks magazine, a four-color glossy windsurfing publication, based out of the southern Oregon coast. When the magazine was sold, Chip stayed on the south coast where these days he spends his time windsurfing, surfing, kayaking, fishing, cycling and writing about it. In between the writing gigs, he’s worked in the non-profit industry as manager and development director. A widower, he lives with two adorable pound puppies – rescue dogs – that keep him on his toes. 
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    Chip Weinert
                                </span>
                            </p>

                        </article>
                    </section>


                    {/* <div className="photo-grid">
                        <div className="row-photo">

                            <div className="photo-row">
                                <div className="photo-column">
                                    <img src={Img6}/>
                                </div>
                                <div className="photo-column">
                                    <img src={Img4}/>
                                    <img src={Img2}/>
                                    <img src={Img3}/>
                                </div>
                                <div className="photo-column">
                                    <img src={Img5}/>

                                    <img src={Img1}/>
                                </div>
                            </div>

                        </div>
                    </div>

                    
                    <div id="slider-container">
                        <Slider {...settings} className="ata-slider">

                                <div className="author-img">
                                    <img src={Img1} 
                                        alt="author image" />
                                </div>

                                <div className="author-img">
                                    <img src={Img2} 
                                        alt="author image"/>
                                </div>

                                <div className="author-img">
                                    <img src={Img3} 
                                        alt="author image" />
                                </div>
                
                                <div className="author-img">
                                    <img src={Img4} 
                                        alt="author image" />
                                </div>

                                <div className="author-img">
                                    <img src={Img5} 
                                        alt="author image" />
                                </div>

                                <div className="author-img">
                                    <img src={Img6} 
                                        alt="author image" />
                                </div>
                        </Slider>
                    </div> */}


                </div>

		 	</Layout>
		</>
	)
}


export default ATB;