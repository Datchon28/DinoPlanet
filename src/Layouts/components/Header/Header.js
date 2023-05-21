import classNames from "classnames/bind";
import style from './Header.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavigateItem from "./NavigateItem";
import logo_brand from '../../../assets/img/logo-brand.png'
import { useState } from "react";

const st = classNames.bind(style)

function Header() {
    const navList = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Funlearning',
            link: '/funlearning'
        },
        {
            title: 'About us',
            link: '/about-us'
        },
        {
            title: 'FAQs',
            link: '/faqs'
        },
        {
            title: 'Education blog',
            link: '/education-blog'
        },
        {
            title: 'Contact us',
            link: '/contact-us'
        }
    ]

    const [openMenuMObile, setOpenMenuMobile] = useState(false)

    return (
        <div className={st('headere-wrapper')}>
            <div className={st('content-left')}>
                <div className={st('menu-icon-mobile')}>
                    <span onClick={() => setOpenMenuMobile(!openMenuMObile)}><FontAwesomeIcon icon={faList} /> </span>

                    <div onClick={() => setOpenMenuMobile(!openMenuMObile)} className={st('menu-header_on-mobile--modal', openMenuMObile && 'open')}>
                        <div className={st('menu-header_on-mobile--item')}>
                            <div className={st('logo')}>
                                <img alt="logo" src={logo_brand} />
                            </div>
                            {navList.map((item, index) => (
                                <NavigateItem key={index} title={item.title} to={item.link}  />
                            ))}
                        </div>
                    </div>  
                    
                </div>

                <div className={st('logo-brand')}>
                    <Link to='/' onClick={() => window.scrollTo({ top: '0', behavior: 'smooth' })}>
                        <figure className={st('logo')}>
                            <img alt="logo-brand" src={logo_brand} className={st('logo-img')} />
                        </figure>
                    </Link>
                </div>
            </div>

            <div className={st('content-center')}>
                <div className={st('list-navigate')}>
                    {navList.map((item, index) => (
                        <NavigateItem key={index} title={item.title} to={item.link}  />
                    ))}
                </div>
            </div>

            <div className={st('content-right')}>
                <Link to='/' className={st('download-link')}>
                    <button className={st('download-btn')}>
                        <span>Free download</span>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Header;