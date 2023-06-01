import classNames from "classnames/bind";
import style from './Home.scss'

import { Link } from 'react-router-dom'
import LeftToRight from "../../Components/Banners/LeftToRight";
import RightToLeft from "../../Components/Banners/RightToLeft";

// Image
import planet from '../../assets/img/Home/Introduce/planet.png'
import astro_carton from '../../assets/img/Home/Introduce/astro-carton.png'
import television from '../../assets/img/Home/Introduce/televison.png'
import youtube_link from '../../assets/img/Home/Introduce/youtube-link.png'
import earth from '../../assets/img/Home/Introduce/earth.png'
import rocket from '../../assets/img/Home/Introduce/rocket.png'
import astro_human from '../../assets/img/Home/Introduce/astro-human.png'
import download_app from '../../assets/img/download-app.png'
import cup from '../../assets/img/Home/Introduce/cup.png'
import ads from '../../assets/img/Home/Introduce/image 73.png'
import skyGalaxy from '../../assets/img/Funlearning/Introduce/1 2.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

// Banner
import watch from '../../assets/img/Home/Banner/watch.png';
import draw from '../../assets/img/Home/Banner/draw.png'
import car from '../../assets/img/Home/Banner/cars.jpg'
import lastbanner from '../../assets/img/Home/Banner/23213213 1.png'
import grass from '../../assets/img/Funlearning/Introduce/Vector (1).png'
import moutain from '../../assets/img/Home/Banner/mountain.png'

// Our International
import InterBanner from "../../assets/img/Home/Banner/image 4.png";
import InterLogo1 from "../../assets/img/Home/Banner/image 68.png";
import InterLogo2 from "../../assets/img/Home/Banner/image 3.png";
import InterLogo3 from "../../assets/img/Home/Banner/image 52.png";
import InterLogo4 from "../../assets/img/Home/Banner/image 71.png";
import InterLogo5 from "../../assets/img/Home/Banner/Untitled-1 38.png";
import backdropInter from '../../assets/img/Funlearning/Introduce/Vector (2).png'

// Loved
import squid from '../../assets/img/Home/Banner/squid.png'
import swimming from '../../assets/img/Home/Banner/swimming.png'
import love from '../../assets/img/Home/Banner/love.png'
import avartar_customer_feedback from '../../assets/img/Home/Banner/avarta-customer.png'
import star from '../../assets/img/Home/Banner/start.png'

const st = classNames.bind(style)

function Home() {
    return (
        <div className={st('home-wrapper')} data-aos="fade-up">
            <div className={st('introduce')} >
                <div className={st('backdrop')}>
                    <img alt="backdrop" src={skyGalaxy} />
                </div>
                
                <div className={st('content-left')}>
                    <div className={st('img-carton')}>
                        <img alt="img-carton" src={planet} className={st('img-carton-planet')} />
                        <img alt="img-carton" src={astro_carton} className={st('img-carton-astro')} />
                    </div>

                    <div className={st('feedback')}>
                        <div className={st('comment')}>

                        </div>

                        <div className={st('youtube')}>
                            <img alt="youtube" src={television} className={st('img-tv')} />
                            <Link to='/' className={st('youtube-link')}>
                                <img alt="youtube" src={youtube_link} className={st('img-youtube-link')} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={st('content-center')}>
                    <div className={st('title')}>
                        <h1>CHILDREN DEVELOP HOLISTIC SKILLS IN A FUNLEARNING APP</h1>
                    </div>
                    
                    <div className={st('desc')}>
                        <p>
                            Do you still remember your childhood dream of becoming an
                            astronaut? a teacher? a musician? We can help you find your
                            dream and make your dream come true. Come and play
                            Dino Planet!
                        </p>
                    </div>

                    <div className={st('download-app')}>
                        <Link to='/' className={st('download-app-link')}>
                            <figure>
                                <img alt="down-app" src={download_app} />
                            </figure>
                        </Link>
                    </div>

                    <div className={st('arrow-down')}>
                        <span>
                            <FontAwesomeIcon icon={faArrowAltCircleDown} />
                        </span>
                    </div>

                    <div className={st('ads')}>
                        <div className={st('cup')}>
                            <img alt="cup" src={cup} />
                        </div>
                        <h3 className={st('title')}>
                            Award-winning
                            learning app for kids
                        </h3>
                        <div className={st('ads-brand')}>
                            <img alt="ads" src={ads} />

                        </div>
                    </div>
                </div>

                <div className={st('content-right')}>
                    <div className={st('earth')}>
                        <figure>
                            <img alt="img-fun" src={rocket} className={st('img-rocket')} />
                            <img alt="img-fun" src={earth} className={st('img-earth')} />
                        </figure>
                    </div>

                    <div className={st('astronaut')}>
                        <figure>
                            <img alt="img-fun" src={astro_human} />
                        </figure>
                    </div>
                </div>
            </div>

            <div className={st('content')}>
                <LeftToRight
                    borderWave={<svg className="wave-border" width="1920" height="76" viewBox="0 0 1920 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M900.497 0.826706C843.344 1.49964 774.261 7.15914 693.249 17.8052C651.355 22.2052 609.462 24.1377 567.568 23.6028C497.411 24.0514 427.79 19.1856 358.708 9.00539C294.307 1.15454 227.34 -1.56307 157.807 0.852581C109.012 2.37099 40.4319 8.57403 -47.9327 19.4617C-132.275 27.7439 -210.929 27.1918 -283.896 17.8052C-349.788 8.33246 -412.489 2.83686 -472 1.31845V75.3667H1001.21V4.1137C969.857 1.47374 936.286 0.378085 900.497 0.826706Z" fill="#FFE500"/>
                    <path d="M2328.18 0.826706C2271.03 1.49964 2201.95 7.15914 2120.94 17.8052C2079.04 22.2052 2037.15 24.1377 1995.26 23.6028C1925.1 24.0514 1855.48 19.1856 1786.4 9.00539C1721.99 1.15454 1655.03 -1.56307 1585.49 0.852581C1536.7 2.37099 1468.12 8.57403 1379.75 19.4617C1295.41 27.7439 1216.76 27.1918 1143.79 17.8052C1077.9 8.33246 1015.2 2.83686 955.688 1.31845V75.3667H2428.89V4.1137C2397.54 1.47374 2363.97 0.378085 2328.18 0.826706Z" fill="#FFE500"/>
                    </svg>
                    }
                    image={<img alt="poster" src={watch} />}
                    bgcolor={'fun'}
                    title='FUN'
                    slogan='EXPLORE FUN AND ENGAGING ACTIVITIES'
                    desc={'Discover 1,000+ game-based learning activites Games, quizzes, songs, stories and videos'}
                />

                <RightToLeft
                    waveBorder={<svg className="wave-border" width="1920" height="77" viewBox="0 0 1920 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M900.497 1.79643C843.344 2.46936 774.261 8.12887 693.249 18.775C651.355 23.1749 609.462 25.1074 567.568 24.5725C497.411 25.0212 427.79 20.1553 358.708 9.97511C294.307 2.12426 227.34 -0.593339 157.807 1.82231C109.012 3.34071 40.4319 9.54376 -47.9327 20.4314C-132.275 28.7136 -210.929 28.1615 -283.896 18.775C-349.788 9.30219 -412.489 3.80659 -472 2.28818V76.3364H1001.21V5.08342C969.857 2.44347 936.286 1.34781 900.497 1.79643Z" fill="#5340AF"/>
                    <path d="M2328.18 1.79643C2271.03 2.46936 2201.95 8.12887 2120.94 18.775C2079.04 23.1749 2037.15 25.1074 1995.26 24.5725C1925.1 25.0212 1855.48 20.1553 1786.4 9.97511C1721.99 2.12426 1655.03 -0.593339 1585.49 1.82231C1536.7 3.34071 1468.12 9.54376 1379.75 20.4314C1295.41 28.7136 1216.76 28.1615 1143.79 18.775C1077.9 9.30219 1015.2 3.80659 955.688 2.28818V76.3364H2428.89V5.08342C2397.54 2.44347 2363.97 1.34781 2328.18 1.79643Z" fill="#5340AF"/>
                    </svg>                    
                    }
                    image={<img alt="poster" src={car} />}
                    bgcolor={'skills'}
                    title='SKILLS'
                    slogan='ACQUIRE HOLISTIC SKILLS TO GET READY
                    FOR SCHOOL AND LIFE'
                    desc={'Designed by education experts Aligned with Australian curriculum'}
                />

                <LeftToRight
                    borderWave={<svg className="wave-border" width="1920" height="77" viewBox="0 0 1920 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M900.497 1.79643C843.344 2.46936 774.261 8.12887 693.249 18.775C651.355 23.1749 609.462 25.1074 567.568 24.5725C497.411 25.0212 427.79 20.1553 358.708 9.97511C294.307 2.12426 227.34 -0.593339 157.807 1.82231C109.012 3.34071 40.4319 9.54376 -47.9327 20.4314C-132.275 28.7136 -210.929 28.1615 -283.896 18.775C-349.788 9.30219 -412.489 3.80659 -472 2.28818V76.3364H1001.21V5.08342C969.857 2.44347 936.286 1.34781 900.497 1.79643Z" fill="#84DFFD"/>
                    <path d="M2328.18 1.79643C2271.03 2.46936 2201.95 8.12887 2120.94 18.775C2079.04 23.1749 2037.15 25.1074 1995.26 24.5725C1925.1 25.0212 1855.48 20.1553 1786.4 9.97511C1721.99 2.12426 1655.03 -0.593339 1585.49 1.82231C1536.7 3.34071 1468.12 9.54376 1379.75 20.4314C1295.41 28.7136 1216.76 28.1615 1143.79 18.775C1077.9 9.30219 1015.2 3.80659 955.688 2.28818V76.3364H2428.89V5.08342C2397.54 2.44347 2363.97 1.34781 2328.18 1.79643Z" fill="#84DFFD"/>
                    </svg>                    
                    }
                    image={<>
                        <img alt="poster" src={draw} />
                        <img alt="poster" src={grass} className={st('grass')} />
                        <img alt="poster" src={moutain} className={st('mountain')} />
                    </>}
                    bgcolor={'creativity'}
                    title='CREATIVITY'
                    slogan='NURTURE AND DEVELOP IMAGINATIONS'
                    desc={'Developed by award winning teams Unlimited fun learning adventures'}
                />
                
                <div className={st("our-international-wrapper")}>
                    <svg className="wave-border" width="1920" height="76" viewBox="0 0 1920 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M901.497 0.826706C844.344 1.49964 775.261 7.15914 694.249 17.8052C652.355 22.2052 610.462 24.1377 568.568 23.6028C498.411 24.0514 428.79 19.1856 359.708 9.00539C295.307 1.15454 228.34 -1.56307 158.807 0.852581C110.012 2.37099 41.4319 8.57403 -46.9327 19.4617C-131.275 27.7439 -209.929 27.1918 -282.896 17.8052C-348.788 8.33246 -411.489 2.83686 -471 1.31845V75.3667H1002.21V4.1137C970.857 1.47374 937.286 0.378085 901.497 0.826706Z" fill="white"/>
                        <path d="M2329.18 0.826706C2272.03 1.49964 2202.95 7.15914 2121.94 17.8052C2080.04 22.2052 2038.15 24.1377 1996.26 23.6028C1926.1 24.0514 1856.48 19.1856 1787.4 9.00539C1722.99 1.15454 1656.03 -1.56307 1586.49 0.852581C1537.7 2.37099 1469.12 8.57403 1380.75 19.4617C1296.41 27.7439 1217.76 27.1918 1144.79 17.8052C1078.9 8.33246 1016.2 2.83686 956.688 1.31845V75.3667H2429.89V4.1137C2398.54 1.47374 2364.97 0.378085 2329.18 0.826706Z" fill="white"/>
                    </svg>


                    <div className={st('backdrop-our-inter')}>
                        <img alt="backdrop" src={backdropInter} />
                    </div>
                    <div className={st('control')}>
                        <span>
                            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                        </span>

                        <span>
                            <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </span>
                    </div>
                    <div className={st("title")} data-aos="zoom-in" data-aos-delay="500" data-aos-duration="2000">
                        <h1>OUR INTERNATIONAL TEAM</h1>
                        <p> 100+ staff from Australia, Vietnam and Singapore</p>
                    </div>

                    <div className={st("content")} data-aos="zoom-in" data-aos-delay="500" data-aos-duration="2000">
                        <div className={st("logos")}>
                            <div className={st("logo-image")}>
                            <img alt="logo" src={InterLogo1} />
                            <img alt="logo" src={InterLogo2} />
                            <img alt="logo" src={InterLogo3} />
                            <img alt="logo" src={InterLogo4} />
                            <img alt="logo" src={InterLogo5} />
                            </div>
                            <div className={st("desc")}>
                                <p>
                                    With a love for children and education, we are based <br></br> in
                                    Australia and work together with experts, designers, <br></br> teachers
                                    and partners around the world to create high <br></br> quality educational
                                    products.
                                </p>
                            </div>
                        </div>

                        <div className={st("thumbnail")}>
                            <img alt="thumb" src={InterBanner} />
                        </div>
                    </div>
                </div>

                <LeftToRight
                borderWave={<svg className="wave-border" width="1920" height="76" viewBox="0 0 1920 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M901.497 0.826217C844.344 1.49915 775.261 7.15866 694.249 17.8048C652.355 22.2047 610.462 24.1372 568.568 23.6023C498.411 24.0509 428.79 19.1851 359.708 9.0049C295.307 1.15405 228.34 -1.56355 158.807 0.852093C110.012 2.3705 41.4319 8.57354 -46.9327 19.4612C-131.275 27.7434 -209.929 27.1913 -282.896 17.8048C-348.788 8.33197 -411.489 2.83637 -471 1.31796V75.3662H1002.21V4.11321C970.857 1.47325 937.286 0.377597 901.497 0.826217Z" fill="#3584FA"/>
                <path d="M2328.18 0.826217C2271.03 1.49915 2201.95 7.15866 2120.94 17.8048C2079.04 22.2047 2037.15 24.1372 1995.26 23.6023C1925.1 24.0509 1855.48 19.1851 1786.4 9.0049C1721.99 1.15405 1655.03 -1.56355 1585.49 0.852093C1536.7 2.3705 1468.12 8.57354 1379.75 19.4612C1295.41 27.7434 1216.76 27.1913 1143.79 17.8048C1077.9 8.33197 1015.2 2.83637 955.688 1.31796V75.3662H2428.89V4.11321C2397.54 1.47325 2363.97 0.377597 2328.18 0.826217Z" fill="#3584FA"/>
                </svg>                               
                }
                    image={<>
                        <img alt="poster" src={swimming} />
                        <img alt="poster" src={squid} className={st('squid','squid1')} />
                        <img alt="poster" src={squid} className={st('squid','squid2')} />
                        <img alt="poster" src={love} className={st('squid','love-img')} />
                    </>}
                    bgcolor={'loved'}
                    title={<>
                        Loved by parents.<br></br> Adored by kids.
                    </>}
                    slogan={
                        <>
                            <div className={st('feedback')}>
                                <div className={st('info-customer')}>
                                    <img alt="ava-customer" src={avartar_customer_feedback} />
                                    <div className={st('name-customer')}>
                                        <p>
                                            David Le 
                                        </p>
                                        <img alt="star" src={star} className="star" />
                                    </div>
                                </div>
                                <div className={st('content-feedback')}>
                                    <p>
                                    Amazing. My little one is about to turn 3yo and was behind on some of her language and skills milestones. This app helped completely!!!!
                                    </p>
                                </div>
                            </div>
                            <div className={st('feedback')}>
                                <div className={st('info-customer')}>
                                    <img alt="ava-customer" src={avartar_customer_feedback} />
                                    <div className={st('name-customer')}>
                                        <p>
                                            David Le 
                                        </p>
                                        <img alt="star" src={star} className="star" />
                                    </div>
                                </div>
                                <div className={st('content-feedback')}>
                                    <p>
                                    Amazing. My little one is about to turn 3yo and was behind on some of her language and skills milestones. This app helped completely!!!!
                                    </p>
                                </div>
                            </div>
                            <div className={st('feedback')}>
                                <div className={st('info-customer')}>
                                    <img alt="ava-customer" src={avartar_customer_feedback} />
                                    <div className={st('name-customer')}>
                                        <p>
                                            David Le 
                                        </p>
                                        <img alt="star" src={star} className="star" />
                                    </div>
                                </div>
                                <div className={st('content-feedback')}>
                                    <p>
                                    Amazing. My little one is about to turn 3yo and was behind on some of her language and skills milestones. This app helped completely!!!!
                                    </p>
                                </div>
                            </div>
                            <div className={st('feedback')}>
                                <div className={st('info-customer')}>
                                    <img alt="ava-customer" src={avartar_customer_feedback} />
                                    <div className={st('name-customer')}>
                                        <p>
                                            David Le 
                                        </p>
                                        <img alt="star" src={star} className="star" />
                                    </div>
                                </div>
                                <div className={st('content-feedback')}>
                                    <p>
                                    Amazing. My little one is about to turn 3yo and was behind on some of her language and skills milestones. This app helped completely!!!!
                                    </p>
                                </div>
                            </div>
                        </>
                    }   
                    
                />

                <RightToLeft
                waveBorder={<svg className="wave-border" width="1920" height="76" viewBox="0 0 1920 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M901.497 0.826706C844.344 1.49964 775.261 7.15914 694.249 17.8052C652.355 22.2052 610.462 24.1377 568.568 23.6028C498.411 24.0514 428.79 19.1856 359.708 9.00539C295.307 1.15454 228.34 -1.56307 158.807 0.852581C110.012 2.37099 41.4319 8.57403 -46.9327 19.4617C-131.275 27.7439 -209.929 27.1918 -282.896 17.8052C-348.788 8.33246 -411.489 2.83686 -471 1.31845V75.3667H1002.21V4.1137C970.857 1.47374 937.286 0.378085 901.497 0.826706Z" fill="white"/>
                <path d="M2329.18 0.826706C2272.03 1.49964 2202.95 7.15914 2121.94 17.8052C2080.04 22.2052 2038.15 24.1377 1996.26 23.6028C1926.1 24.0514 1856.48 19.1856 1787.4 9.00539C1722.99 1.15454 1656.03 -1.56307 1586.49 0.852581C1537.7 2.37099 1469.12 8.57403 1380.75 19.4617C1296.41 27.7439 1217.76 27.1918 1144.79 17.8052C1078.9 8.33246 1016.2 2.83686 956.688 1.31845V75.3667H2429.89V4.1137C2398.54 1.47374 2364.97 0.378085 2329.18 0.826706Z" fill="white"/>
                </svg>                
                }
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

export default Home;