import React from 'react'
import {Link} from 'gatsby'
import Book1 from '../images/book_front_1.png'
import Book2 from '../images/book_front_2.png'

const UpperMain =()=>{
    return  (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">
                    <h1>Books</h1>
                    
                    <p className="middle-params">
                    Think of it as Philip Marlowe meets Fritz the Cat.
                    </p>

                    <div className="grid-two-columns" id="wrapper-two-books">
                        <div className="book-wraps">
                            <img src={Book2}/>
                            <h5>A CURIOUS CAT IN A DEAD DOGS TOWN</h5>
                            <span>TROLOGY</span>
                            <button>
                                <Link 
                                    to={'/about-the-book/#johnny_taggett'}>
                                        Read More
                                </Link>
                            </button>
                        </div>
                    </div>

                    <div className="grid-two-columns" id="wrapper-two-books">
                        <div className="book-wraps">
                            <img src={Book1}/>
                            <h5>A CURIOUS CAT WAGS A FISHY TALE</h5>
                            <span></span>
                            <button>
                                <Link 
                                    to={'/about-the-book/#johnny_taggett'}>
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

export default UpperMain