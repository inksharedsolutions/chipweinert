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
                                    title:`A CURIOUS CAT IN A DEAD DOG'S TOWN`,
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
                                        barnes:'https://www.barnesandnoble.com/w/a-curious-cat-in-a-dead-dogs-town-chip-weinert/1127202956?ean=9781643458922',
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
                                    `<p>
                                    In a parallel universe where humans evolved not only from apes, but from dogs, cats, bears, otters, and seals, to name a few, Matthew “Duke” Hazard is hired to solve a murder. Duke discovers, with the help from a friendly band of river otters, that a rogue gang of seals are stealing all the salmon and trout from the Beaver Butt River and selling them on the black market to a cartel of ruthless muskrats for use in their slave-labor lutefisk factories. Duke, a feline, who, like most cats, would rather curl into a ball in that sunny spot on the couch and take a nap, ends up being harassed—as well as helped—by the local government to expose a case of corruption that may have led to murder! The action takes place on the water and on the shores of the wild and scenic Beaver Butt River, which flows between the two towns of CatsCamp and Dogstown before emptying into the ocean. We learn about the fish and the fishing that are a major factor in the lives of both towns both commercially and recreationally.
                                    </p>
                                    <p>
                                    Along the way, we meet cast of wild creatures: Leo Phieu, an old one-eyed, fish-smelling Burmese who has inhaled his share of gasoline, paint, and fiberglass fumes over the years. We also meet his niece Faye, who has a crush on Duke that Duke does not return. And then there’s Butch and Ginger Larson, owners of the feline weekly paper, the CatsCamp Distorter. There are otters, seals, and even a cameo from a pair of fly-fishing frogs! Plus, a few characters making an encore appearance from the first book in the series, A Curious Cat in a Dead Dog’s Town, such as Duke’s buddy Gibson, Police Captain Ursalik, and Duke’s mother, who thinks Duke is lazy even by a cat’s standards.
                                    </p>`,

                                    ebooks:{
                                        stratton : 'https://www.stratton-press.com/books/a-curious-cat-wags-a-fishy-tale/',
                                        barnes: 'https://www.barnesandnoble.com/w/a-curious-cat-wags-a-fishy-tale-chip-weinert/1136937374?ean=9781648950018',
                                        amazon :'https://www.amazon.com/Curious-Cat-Wags-Fishy-Tale-ebook/dp/B087QVJVBP/ref=sr_1_1?dchild=1&keywords=9781648950018&qid=1588791012&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Curious-Cat-Wags-Fishy-Tale/dp/1648950000/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1588791031&sr=8-1',
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