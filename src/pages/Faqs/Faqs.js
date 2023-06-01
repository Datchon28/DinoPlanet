import classNames from "classnames/bind";
import style from './Faqs.scss'

// Image
import backdrop from '../../assets/img/Funlearning/Introduce/1 2.png'
import earth from '../../assets/img/Faqs/earth.png'
import moon from '../../assets/img/Faqs/moon.png'
import BannerFishing from "../../Components/Banners/BannerFishing/BannerFishing";
import city from '../../assets/img/Funlearning/Introduce/Vector (2).png'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown, faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";

const st = classNames.bind(style)

function Faqs() {
    const listMenu = [
        {
            id:'about-dino-planet',
            title:'About Dino Planet'
        },
        {
            id:'privacy-policy',
            title:'Privacy policy'
        },
        {
            id:'term-of-use',
            title:'Term of use'
        },
        {
            id:'technical-issue',
            title:'Technical issue'
        }
    ]

    const listMenuContent = [
        {
            id:'',
            title: 'about-dino-planet',
            container: [
                {   id:'abc',
                    title:'About Dino Planet',
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {   
                    id:'def',
                    title:'Lorem Ipsum',
                    content: "This is demo. This is demo.This is demo.This is demoThis is demo "
                },
                {   
                    id:'feg',
                    title:'Lorem Ipsum',
                    content: ""
                },
                {   
                    id:'rtf',
                    title:'Lorem Ipsum',
                    content: ""
                },
                {   
                    id:'lol',
                    title:'Lorem Ipsum',
                    content: ""
                },
                {   
                    id:'fifa',
                    title:'Lorem Ipsum',
                    content: ""
                },
            ]
        },
        {
            id:'',
            title: 'privacy-policy',
            container: [
                {
                    title:'',
                    content: ""
                },
                {
                    title:'',
                    content: ""
                },
                {
                    title:'',
                    content: ""
                },
                {
                    title:'',
                    content: ""
                },
                {
                    title:'',
                    content: ""
                },
                {
                    title:'',
                    content: ""
                },
            ]
        },
        {
            id:'',
            title: 'term-of-use',
            container: [
                {
                    title:'',
                    content: ""
                },
                {
                    title:'',
                    content: ""
                },
                {
                    title:'',
                    content: ""
                },
                {
                    title:'',
                    content: ""
                },
                {
                    title:'',
                    content: ""
                },
                {
                    title:'',
                    content: ""
                },
            ]
        },
        {
            id:'',
            title: 'technical-issue',
            container: [
                {
                    title:'',
                    content: ""
                },
                {
                    title:'',
                    content: ""
                },
                {
                    title:'',
                    content: ""
                },
                {
                    title:'',
                    content: ""
                },
                {
                    title:'',
                    content: ""
                },
                {
                    title:'',
                    content: ""
                },
            ]
        },
        
    ]

    const [tab, setTab] = useState('about-dino-planet')
    const [content, setContent] = useState(listMenuContent.filter(item => item.title === tab))
    const [detail, setDetail] = useState(false)
    const [seeDetail, setSeeDetail] = useState(null)

    const handleOpenDetail = (id) => {
        setSeeDetail(id)
        // boxTitle.classList.add('see-detail')
        setDetail(!detail)
    }
    console.log(seeDetail);

    return (
        <div className={st('faqs-wrapper')} data-aos='fade-up'>
            <div className={st('introduce')}>
                <div className={st('backdrop')}>
                    <img alt="backdrop" src={backdrop} />
                </div>

                <div className={st('item')}>
                    <div className={st('title')}>
                        <img alt="moon" src={moon} />
                        <h1>Frequently Asked Questions</h1>
                    </div>
                    <img alt="earth" src={earth} className={st('earth')} />
                </div>
            </div>

            <div className={st('container')}>
                <svg className="wave-border" width="1920" height="76" viewBox="0 0 1920 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M900.497 0.826706C843.344 1.49964 774.261 7.15914 693.249 17.8052C651.355 22.2052 609.462 24.1377 567.568 23.6028C497.411 24.0514 427.79 19.1856 358.708 9.00539C294.307 1.15454 227.34 -1.56307 157.807 0.852581C109.012 2.37099 40.4319 8.57403 -47.9327 19.4617C-132.275 27.7439 -210.929 27.1918 -283.896 17.8052C-349.788 8.33246 -412.489 2.83686 -472 1.31845V75.3667H1001.21V4.1137C969.857 1.47374 936.286 0.378085 900.497 0.826706Z" fill="white"/>
                    <path d="M2328.18 0.826706C2271.03 1.49964 2201.95 7.15914 2120.94 17.8052C2079.04 22.2052 2037.15 24.1377 1995.26 23.6028C1925.1 24.0514 1855.48 19.1856 1786.4 9.00539C1721.99 1.15454 1655.03 -1.56307 1585.49 0.852581C1536.7 2.37099 1468.12 8.57403 1379.75 19.4617C1295.41 27.7439 1216.76 27.1918 1143.79 17.8052C1077.9 8.33246 1015.2 2.83686 955.688 1.31845V75.3667H2428.89V4.1137C2397.54 1.47374 2363.97 0.378085 2328.18 0.826706Z" fill="white"/>
                </svg>

                <div className={st('content')}>
                    <ul className={st('list')}>
                        {listMenu.map((item, index) => (
                            <li onClick={(e) => {
                                setTab(e.target.id)
                                setContent(listMenuContent.filter(item => item.title === e.target.id))
                            }} id={item.id} key={index} className={st('list-item', tab === item.id && 'active')}>
                                <span id={item.id}>{item.title}</span>
                            </li>
                        ))}
                    </ul>

                    <div className={st('list-content')}>
                        {
                            content?.map((item, index) => (

                                <div key={item.id}>
                                    {item.container.map((c, index) => (
                                        <div key={index} className={st('box')}  >
                                            <div id={c.id} className={st('box-title')} onClick={(e) => handleOpenDetail(e.target.id)}>
                                                <h3 id={c.id} >{c.title}</h3>
                                                <span id={c.id}><FontAwesomeIcon icon={seeDetail !== c.id ? faChevronCircleUp : faChevronCircleDown} /></span>
                                            </div>

                                           
                                                <div className={st('box-content', seeDetail !== c.id  && 'see-detail')}>
                                                
                                                   <p>
                                                    { c.content}
                                                   </p>
                                                
                                                </div>
                                            
                                        </div>
                                    ))}
                                </div>

                            ))
                        }
                    </div>
                </div>

                <div className={st('banner-fishing')}>
                    <BannerFishing />
                </div>
            </div>

            <div className={st('sign-up')} >
                <svg className="wave-border" width="1920" height="76" viewBox="0 0 1920 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M901.497 0.826706C844.344 1.49964 775.261 7.15914 694.249 17.8052C652.355 22.2052 610.462 24.1377 568.568 23.6028C498.411 24.0514 428.79 19.1856 359.708 9.00539C295.307 1.15454 228.34 -1.56307 158.807 0.852581C110.012 2.37099 41.4319 8.57403 -46.9327 19.4617C-131.275 27.7439 -209.929 27.1918 -282.896 17.8052C-348.788 8.33246 -411.489 2.83686 -471 1.31845V75.3667H1002.21V4.1137C970.857 1.47374 937.286 0.378085 901.497 0.826706Z" fill="white"/>
                    <path d="M2329.18 0.826706C2272.03 1.49964 2202.95 7.15914 2121.94 17.8052C2080.04 22.2052 2038.15 24.1377 1996.26 23.6028C1926.1 24.0514 1856.48 19.1856 1787.4 9.00539C1722.99 1.15454 1656.03 -1.56307 1586.49 0.852581C1537.7 2.37099 1469.12 8.57403 1380.75 19.4617C1296.41 27.7439 1217.76 27.1918 1144.79 17.8052C1078.9 8.33246 1016.2 2.83686 956.688 1.31845V75.3667H2429.89V4.1137C2398.54 1.47374 2364.97 0.378085 2329.18 0.826706Z" fill="white"/>
                </svg>

                <div className={st('title')} data-aos="zoom-in"data-aos-delay="500" data-aos-duration="1500">
                    <h1>
                        Sign up for our weekly printables delivered right to your inbox!
                    </h1>
                </div>
                
                <div className={st('sign-up-input')} data-aos="zoom-in"data-aos-delay="500" data-aos-duration="1500">
                    <input placeholder="Your email..." />
                    <button>
                        Sign Up
                    </button>
                </div>
                <div className={st('background')}>
                    <img alt="city" src={city} />
                </div>
            </div>
        </div>
    );
}

export default Faqs;