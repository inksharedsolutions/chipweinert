import React, {useState, useEffect} from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/img/author_img.png'


/*Slick*/
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* 
    Author Images
*/

import Img1 from '../../static/author/1.jpeg'
import Img2 from '../../static/author/2.jpeg'
import Img3 from '../../static/author/3.jpeg'
import Img4 from '../../static/author/4.jpeg'
import Img5 from '../../static/author/5.jpeg'
import Img6 from '../../static/author/6.jpeg'

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
                                Hey you big old snow leopard, come on over here, and let me buy you a drink. I’ve been looking for someone just your size and smarts
                                </h4>
                                
                                <span className="ata-span-fx">author quote</span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                        <br/>
                        <br/>
                            <p>
                            Chip Weinert is a former newspaper and magazine writer, editor, and associate publisher as well as professional windsurfer. He lives (and surfs, windsurfs, fishes, and bikes) on Oregon's Rogue Coast with two canines who think he's crazy. Stay tuned for his next book in the Curious Cat series, A Curious Cat Wags a Fishy Tale.
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