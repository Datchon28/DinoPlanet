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
            <svg className="wave-border" width="1920" height="76" viewBox="0 0 1920 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M998.497 0.826706C941.344 1.49964 872.261 7.15914 791.249 17.8052C749.355 22.2052 707.462 24.1377 665.568 23.6028C595.411 24.0514 525.79 19.1856 456.708 9.00539C392.307 1.15454 325.34 -1.56307 255.807 0.852581C207.012 2.37099 138.432 8.57403 50.0673 19.4617C-34.2745 27.7439 -112.929 27.1918 -185.896 17.8052C-251.788 8.33246 -314.489 2.83686 -374 1.31845V75.3667H1099.21V4.1137C1067.86 1.47374 1034.29 0.378085 998.497 0.826706Z" fill="#824DE3"/>
                <path d="M2426.18 0.826706C2369.03 1.49964 2299.95 7.15914 2218.94 17.8052C2177.04 22.2052 2135.15 24.1377 2093.26 23.6028C2023.1 24.0514 1953.48 19.1856 1884.4 9.00539C1819.99 1.15454 1753.03 -1.56307 1683.49 0.852581C1634.7 2.37099 1566.12 8.57403 1477.75 19.4617C1393.41 27.7439 1314.76 27.1918 1241.79 17.8052C1175.9 8.33246 1113.2 2.83686 1053.69 1.31845V75.3667H2526.89V4.1137C2495.54 1.47374 2461.97 0.378085 2426.18 0.826706Z" fill="#824DE3"/>
            </svg>

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