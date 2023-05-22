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
import { faArrowDown, faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

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
                {
                    title:'About Dino Planet',
                    content: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    title:'Lorem Ipsum',
                    content: ""
                },
                {
                    title:'Lorem Ipsum',
                    content: ""
                },
                {
                    title:'Lorem Ipsum',
                    content: ""
                },
                {
                    title:'Lorem Ipsum',
                    content: ""
                },
                {
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

                                <div >
                                    {item.container.map((c, index) => (
                                        <div className={st('box')}>
                                            <div className={st('box-title')}>
                                                <h3 >{c.title}</h3>
                                                <span><FontAwesomeIcon icon={faChevronCircleDown} /></span>
                                            </div>

                                            {c.content !== '' &&
                                                <div className={st('box-content')}>
                                                {
                                                    c.content
                                                }
                                            </div>
                                            }
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

            <div className={st('sign-up')} data-aos="zoom-in"data-aos-delay="500" data-aos-duration="1500">
                <div className={st('title')}>
                    <h1>
                        Sign up for our weekly printables delivered right to your inbox!
                    </h1>
                </div>
                
                <div className={st('sign-up-input')}>
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