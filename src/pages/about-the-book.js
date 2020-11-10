import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../images/book_front_1.png'
import Book2 from '../images/book_front_2.png'

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'chip-weinert',
	  config: { identifier:  12, slug}
    }
    

	
	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path}/>
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                 
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo  
                                data={{
                                    title:`A CURIOUS CAT IN A DEAD DOGS TOWN`,
                                    spanTitle: "",
                                    imgSrc: Book2,
                                    id:'johnny_taggett',
                                    content:
                                    `<p>In a parallel universe where humans evolved not only from apes but also cats, dogs, bears, weasels, and other animals, Duke Hazzard, a feline private eye, is hired to find the murderer of a prominent canine. It’s a tongue-in-cheek, fun murder mystery. Think of it as Philip Marlowe meets Fritz the Cat. </p>
                                    <p>
                                    The characters include Mathew “Duke” Hazzard, a feline who’d rather sleep or surf than do anything resembling work. We also meet his best friend, a big black lab that has an uncanny knack for showing up right when Duke’s about to get into trouble. There’s Gloria, a beautiful Siamese whose husband, Ralph, is found dead in his office at the local dog biscuit factory. Of course there’s Police Captain Ursalik, a big old grizzly who has been counting the days to retirement since he joined the force. And let’s not forget the de Katz brothers, who may or may not have been involved in the murder. 
                                    </p><p>
                                    Set in the twin towns of CatsCamp and Dogstown that straddle the Beaver Butt River just as it meets the ocean, this fun story takes us in and out of the surf zone and the local taverns before it culminates in a comedic chase scene down the rugged “Left Coast.” In the meantime, Duke gets into his share of scrapes—as any good tomcat does. He has to deal with a mother who thinks he’s lazy—even by cat standards. He also falls into a one-sided love affair with a beautiful gal from back east. 
                                    </p><p>
                                    You could never call Duke a successful cat, and it seems that few in town like him very much. All in all, we are torn between laughing at and crying along with our very reluctant hero, but we cheer for him in the end as he solves his first case.
                                    </p>`,

                                    ebooks:{
                                        stratton : 'https://www.stratton-press.com/books/a-curious-cat-in-a-dead-dogs-town/',
                                        barnes: 'https://www.barnesandnoble.com/w/a-curious-cat-in-a-dead-dogs-town-chip-weinert/1127202956?ean=9781643458939',
                                        amazon :'https://www.amazon.com/Curious-Cat-Dead-Dogs-Town-ebook/dp/B084Q9SKCF/ref=sr_1_1?keywords=9781643458939&qid=1581618612&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/dp/1643458922/ref=sr_1_1?keywords=9781643458922&qid=1582040528&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/the-twins-of-fairland-sb-white/1136287303?ean=9781643458687',
                                        booksamillion:'https://www.booksamillion.com/p/Curious-Cat-Dead-Dogs-Town/Chip-Weinert/9781643458922?id=8043859463603&_ga=2.84711513.1190744042.1604385963-131468970.1604385963#',
                                    },
                                    // screenPlay: true
                                }}
                            />
                            <BookInfo  
                                data={{
                                    title:`A CURIOUS CAT WAGS A FISHY TALE`,
                                    spanTitle: "",
                                    imgSrc: Book1,
                                    id:'johnny_taggett',
                                    content:
                                    `<p></p>Book 1 – The Hidden Kingdom</p>
                                    <p>
                                    In The Hidden Kingdom, Tre and Skylin, twins separated at birth, are reunited. As they get to know each other, they discover an ancient magic hidden for years. They team up to protect the hidden kingdom of Fairland alongside their unique animal guardians. When they are challenged by a forgotten enemy with dark powers, they must trust and depend on each other. Tre and Skylin are guided on their journey into unknown territory by Mallrok, a mystic shaman. The twins may look alike, but are very different in other ways. Together they complete each other as the Twins of Fairland. 
                                    </p><p>
                                    Book 2 – Revenge of the Spirit Riders
                                    </p><p>
                                    In Revenge of the Spirit Riders, the magic continues when Tre discovers an ancient curse placed on the lineage of Currin. Queen Laurel, Tre and Skylin’s mother, is the last of the line of queens of Currin, and Fairland is threatened by the dark spirit riders of Lothan. Tre and Skylin must lead the people to a new land and escape the destruction of Fairland. 
                                    </p><p>
                                    Book 3 – The Sword of Justice
                                    </p><p>
                                    Escaping from the coming threat of Saxon invaders, the children of Tre and Skylin must ban together to survive and find a new home. Merlin, Tre’s son, and Nav, Skylin’s son, must lead the small band of survivors to safety. Once settled in their new home, Merlin must keep his oath to his father and leaves to join Arthur.  Now armed with The Sword of Justice, Arthur leads the fight against the Saxon army. 
                                    </p>`,

                                    ebooks:{
                                        stratton : 'https://www.stratton-press.com/books/a-curious-cat-wags-a-fishy-tale/',
                                        barnes: 'https://www.barnesandnoble.com/w/a-curious-cat-wags-a-fishy-tale-chip-weinert/1136937374?ean=9781648950018',
                                        amazon :'https://www.amazon.com/Thief-Night-Joseph-Bartley-Haltom-ebook/dp/B084Q64SN2/ref=sr_1_1?keywords=9781643458885&qid=1581618901&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/dp/1643458876/ref=sr_1_1?keywords=9781643458878&qid=1582040741&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/a-curious-cat-wags-a-fishy-tale-chip-weinert/1136937374?ean=9781648950001',
                                        booksamillion:'https://www.booksamillion.com/p/Curious-Cat-Wags-Fishy-Tale/Chip-Weinert/9781648950001?id=8043859463603',
                                    },
                                    // screenPlay: true
                                }}
                            />

                            <div className="commentSection" >
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;