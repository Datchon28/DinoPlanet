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
            icon: faLocation
        },
        { 
            id:'email',
            info: 'contact@dinoplanet.com.au',
            icon: faEnvelope
        },
        { 
            id:'phone',
            info: '(84-24) 3224 7399',
            icon: faPhone
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
                <div className={st('content')}>
                    <div className={st('contact-info')}>
                        <ul className={st('contact-info-list')}>
                            <h2>Contact</h2>
                            {InfoContact.map((item, index) => (
                                <li key={index} className={st('contact-info-item')}>
                                    <span className={st('icon-info')}>
                                        <FontAwesomeIcon icon={item.icon} />
                                    </span>

                                    <p className={st('info-detail')}>
                                        {item.info}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <form className={st('contact-form')}>
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