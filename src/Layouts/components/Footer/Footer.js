import classNames from "classnames/bind"
import style from './Footer.scss'
import { Link } from "react-router-dom";

import logo from '../../../assets/img/logo-brand.png'
import download_app from '../../../assets/img/download-app.png'
import social from '../../../assets/img/social.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const st = classNames.bind(style)

function Footer() {
    const policies = [
        {
            title: 'Privacy policy',
            link: '/privacy-policy'
        },
        {
            title: 'Term of Use',
            link: '/term-of-use'
        },
        {
            title: 'Return and Refund Policy',
            link: '/return-and-refund-policy'
        },
        {
            title: 'Buying and Payment Instructions',
            link: '/buying-and-payment'
        }
    ]
    
    return (
        <div className={st('footer-wrapper')}>
            <div className={st('user')}>
                <div className="logo-and-download">
                    <img alt="logo" src={logo} />

                    <Link >
                        <img alt="download" src={download_app} />
                    </Link>
                </div>

                <div>
                    <div className={st('social')}>
                        <span>More for us</span>
                        <Link>
                            <img alt="social" src={social} />
                        </Link>
                    </div>
                    <div className={st('email-user')}>
                        <p>Sign up for our weekly printables right to your inbox!</p>
                        <div className={st('input-email')}>
                            <input placeholder="Your Email"  />
                        </div>
                        <button className={st('btn-send-email')}>Send</button>
                    </div>
                </div>
            </div>

            <div className={st('me')}>  
                <div className={st('policies')}>
                    {policies.map((item, index) => (
                        <div key={index}>  
                            <Link to={item.link} className={st('policies-link')}>
                                <p>{item.title}</p>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className={st('contact')}>
                    <p><span><FontAwesomeIcon icon={faEnvelope} /></span> contact@dinoplanet.com.au</p>
                    <p><span><FontAwesomeIcon icon={faPhone} /></span>(84-24) 3224 7399</p>
                    <p><span><FontAwesomeIcon icon={faLocationDot} /></span>34/269 Wickham Street, Fortitude Valley, QLD 4006</p>
                </div>
            </div>

        </div>
    );
}

export default Footer;