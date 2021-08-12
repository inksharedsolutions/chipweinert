import React from "react"



const Video = () =>{
    return(
        <>
            <section className="book-trailer">
                <div className="grid-two-columns" id="trailer-body">
                    
                    <div className="grid-child-content">
                        <h5>Chip Weinert</h5>

                        <h1>
                            <span>Radio</span>
                            <span>Interview</span>
                        </h1>

                        <p>
                           Just like how the story of the book goes, 
                           the process in writing it was also a journey.
                           Hear about it from the author himself.
                           Click the play button and learn more.
                        </p>
                        
                    </div>

                    <div className="grid-video-container">
                        <div className="player-wrapper">
                            {/* <ReactPlayer
                                className="react-player"
                                url={"https://www.youtube.com/watch?v=eCaC9KeyxS4"}
                                width="100%"
                                height="400px"
                                controls={true}
                                playIcon
                            /> */}
                            <iframe src="https://www.youtube.com/embed/u9IAAw7w8Pc" width="100%" height="400"></iframe>
                        </div>
                        {/* https://www.youtube.com/watch?v=u9IAAw7w8Pc&list=PLkp1Zwfxu853FOwiGz2bH9FlItWFJYEXZ&index=29 */}
                    </div>
                
                </div> 
            </section>
        </>
    )
}

export default Video;