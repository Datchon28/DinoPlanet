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
                    image={<img alt="poster" src={watch} />}
                    bgcolor={'fun'}
                    title='FUN'
                    slogan='EXPLORE FUN AND ENGAGING ACTIVITIES'
                    desc={'Discover 1,000+ game-based learning activites Games, quizzes, songs, stories and videos'}
                />

                <RightToLeft
                    image={<img alt="poster" src={car} />}
                    bgcolor={'skills'}
                    title='SKILLS'
                    slogan='ACQUIRE HOLISTIC SKILLS TO GET READY
                    FOR SCHOOL AND LIFE'
                    desc={'Designed by education experts Aligned with Australian curriculum'}
                />

                <LeftToRight
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
                
                <div className={st("our-international-wrapper")} data-aos="zoom-in" data-aos-delay="500" data-aos-duration="2000">
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
                    <div className={st("title")}>
                        <h1>OUR INTERNATIONAL TEAM</h1>
                        <p> 100+ staff from Australia, Vietnam and Singapore</p>
                    </div>

                    <div className={st("content")}>
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
                            <span className={st('feedback')}>
                            Amazing. My little one is about to turn 3yo and was behind on some of her language and skills milestones. This app helped completely!!!!
                            </span>
                            <span className={st('feedback')}>
                                Amazing. My little one is about to turn 3yo and was behind on some of her language and skills milestones. This app helped completely!!!!
                            </span>
                            <span className={st('feedback')}>
                                Amazing. My little one is about to turn 3yo and was behind on some of her language and skills milestones. This app helped completely!!!!
                            </span>
                            <span className={st('feedback')}>
                                Amazing. My little one is about to turn 3yo and was behind on some of her language and skills milestones. This app helped completely!!!!
                            </span>
                        </>
                    }
                    
                />

                <RightToLeft
                    image={<img alt="poster" src={lastbanner} />}
                    bgcolor={'last-banner'}
                    title='SKILLS'
                    slogan="We're Committed to Our Values"
                    desc={"We appreciate children's happiness and desire to make every second of playing bring their needs"}
                />
            </div>
        </div>
    );
}

export default Home;