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
                    "Hey you big old snow leopard, come on over here, and let me buy you a drink. I’ve been looking for someone just your size and smarts,”
                    </p>
                    <table align = "center">
                        <tr>
                            <td>
                                    <img src={Book2}/>
                                    <strong><h2>A CURIOUS CAT IN A DEAD DOGS TOWN</h2></strong>
                                    <span></span>
                                    <br/>
                                    <button>
                                        <Link 
                                            to={'/about-the-book/#johnny_taggett'}>
                                                Read More
                                        </Link>
                                    </button>
                            </td>
                            <td>
                                    <img src={Book1}/>
                                    <h2>A CURIOUS CAT WAGS A FISHY TALE</h2>
                                    <span></span>
                                    <br/>

                                    <button>
                                        <Link 
                                            to={'/about-the-book/#johnny_taggett'}>
                                                Read More
                                        </Link>
                                    </button>
                            </td>
                        </tr>
                    </table>
                    <br/><br/>
                </div>
            </section>
        </>
    )
}

export default UpperMain