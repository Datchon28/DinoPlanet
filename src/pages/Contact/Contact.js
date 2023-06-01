import classNames from "classnames/bind";
import style from './Contact.scss'
import RightToLeft from "../../Components/Banners/RightToLeft";

import backdrop from '../../assets/img/Funlearning/Introduce/1 2.png'
import earth from '../../assets/img/Faqs/earth.png'
import moon from '../../assets/img/Faqs/moon.png'
import dino from '../../assets/img/Contact/Group (1).png'
import map from '../../assets/img/Contact/image 66.png'
import lastbanner from '../../assets/img/Home/Banner/23213213 1.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faEnvelope , faPhone} from "@fortawesome/free-solid-svg-icons";

const st = classNames.bind(style)

function Contact() {
    const InfoContact = [
        { 
            id:'location',
            info: 'Level 6, Suite 34, 269 Wickham Street, Fortitude Valley, QLD 4007, Australia',
            icon: faLocation,
            colorIcon: '#FFC835'
        },
        { 
            id:'email',
            info: 'contact@dinoplanet.com.au',
            icon: faEnvelope,
            colorIcon: '#5F98D1'
        },
        { 
            id:'phone',
            info: '(84-24) 3224 7399',
            icon: faPhone,
            colorIcon: '#FF3F56'
        },

    ]
    return (
        <div className={st('contact-wrapper')} data-aos='fade-up'>
            <div className={st('introduce')}>
                <div className={st('backdrop')}>
                    <img alt="backdrop" src={backdrop} />
                </div>

                <div className={st('item')}>
                    <div className={st('title')}>
                        <img alt="moon" src={moon} />
                        <h1>Contact us</h1>
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
                    <div className={st('contact-info')}>
                        <ul className={st('contact-info-list')}>
                            <h2>Contact</h2>
                            {InfoContact.map((item, index) => (
                                <li key={index} className={st('contact-info-item')}>
                                    <span style={{ color: item.colorIcon }} className={st('icon-info')}>
                                        <FontAwesomeIcon icon={item.icon} />
                                    </span>

                                    <p className={st('info-detail')}>
                                        {item.info}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <form id="form-contact" className={st('contact-form')}>
                            <h2>Contact us</h2>
                            <img alt="dino" src={dino} className={st('dino-img')} />
                            
                            <div className="box-input">
                                <div className={st('input')}>
                                    <input placeholder="Your name..." />
                                </div>
                                <div className={st('input')}>
                                    <input placeholder="Age of baby..." />
                                </div>
                                <div className={st('input')}>
                                    <input placeholder="Your email..." />
                                </div>
                                <div className={st('input')}>
                                    <input placeholder="Your phone..." />
                                </div>
                                <div className={st('input', 'message')}>
                                    <input placeholder="Send message to Dino Planet..." />
                                </div>
                            </div>

                            <div className={st('form-send-btn')}>
                                <button>SEND</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className={st('map')}>
                    <img alt="map" src={map} />
                </div>

                <RightToLeft
                    image={<img alt="poster" src={lastbanner} />}
                    bgcolor={'last-banner'}
                    title="We're Committed to Our Values"
                    slogan="We appreciate children's happiness and desire to make every second of playing bring their needs"
                    desc={""}
                />
            </div>
        </div>
    );
}

export default Contact;