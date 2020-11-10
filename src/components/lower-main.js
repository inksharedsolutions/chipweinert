import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/img/dummy.png'

const LowerMain = ()=>{
    return(
        <>
            <section className="author-section">
                <div className="container-gt">
                    <div className="grid-two-columns" id="author-container">
                        <div className="wrapper-auth-content auth-img-container">
                            <img src={AuthorImg} />
                        </div>

                        <div className="wrapper-auth-content">
                            <p>
                                Chip Weinert grew up in Wisconsin before getting his degree in Communication from Utah State University. After college, he moved to Miami and worked writing ad copy for mail order catalogs. He left Miami and headed back out west, this time landing in Hood River, Oregon after a couple years in Seattle.
                            </p>

                            <h1>Chip Weinert</h1>

                            <span className="span-tagline">Author & Writer</span>

                            <button>
                                <Link to="/about-the-author">
                                    Read More
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LowerMain 