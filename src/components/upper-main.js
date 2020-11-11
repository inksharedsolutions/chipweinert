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
                    </p>
                    <table align = "center">
                        <tr>
                            <td>
                                    <img src={Book2}/>
                                    <h1 className="bookTitle">A CURIOUS CAT IN A DEAD DOGS TOWN</h1>
                                    <span></span>
                                    <br/>
                                    <button>
                                        <Link 
                                            to={'/about-the-book/'}>
                                                Read More
                                        </Link>
                                    </button>
                            </td>
                            <td>
                                    <img src={Book1}/>
                                    <h1 className="bookTitle">A CURIOUS CAT WAGS A FISHY TALE</h1>
                                    <span></span>
                                    <br/>

                                    <button>
                                        <Link 
                                            to={'/about-the-book/'}>
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