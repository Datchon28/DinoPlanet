import classNames from "classnames/bind";
import style from './Funlearning.scss'
import LeftToRight from '../../Components/Banners/LeftToRight'

// Image
import backdrop from '../../assets/img/Funlearning/Introduce/backdrop.png'
import download_app from '../../assets/img/download-app.png'
import CarouselSlider from "../../Components/Carousel/Carousel";

// Exercise
import english from '../../assets/img/Funlearning/BoxWork/English.png'
import math from '../../assets/img/Funlearning/BoxWork/Math.png'
import song from '../../assets/img/Funlearning/BoxWork/Song.png'
import learn from '../../assets/img/Funlearning/BoxWork/Learn.png'
import BoxWork from "./Subjects/BoxWork/BoxWork";

import english_work_1 from '../../assets/img/Funlearning/BoxWork/english-work-1.png'
import english_work_2 from '../../assets/img/Funlearning/BoxWork/english-work-2.png'
import english_work_3 from '../../assets/img/Funlearning/BoxWork/english-work-3.png'
import math_work_1 from '../../assets/img/Funlearning/BoxWork/math-work-1.png'
import math_banner from '../../assets/img/Funlearning/BoxWork/Banner-math.png'
import Banner_math_footer from '../../assets/img/Funlearning/BoxWork/Banner_math_footer.png'

// Banner
import dinoImage from '../../assets/img/Funlearning/Introduce/5 5.png'
import backgroundBanner from '../../assets/img/Funlearning/Introduce/1 2.png'
import planetBanner from '../../assets/img/Funlearning/Introduce/2 1.png'
import grass from '../../assets/img/Funlearning/Introduce/Vector (1).png'
import rocket from '../../assets/img/Home/Introduce/rocket.png'
import city from '../../assets/img/Funlearning/Introduce/Vector (2).png'
import { Link } from "react-router-dom";
import { useState } from "react";

const st = classNames.bind(style)

function Funlearning() {
    const subjectsList = [
        {   
            id: 'all',
            title: 'All',
        },
        {   
            id: 'english',
            title: 'English',
        },
        {   
            id: 'math',
            title: 'Math',
        },
        {   
            id: 'pe',
            title: 'PE',
        },
        {   
            id: 'story',
            title: 'Story',
        },
        {   
            id: 'song',
            title: 'Song',
        },
        {   
            id: 'worksheet',
            title: 'Worksheet',
        }
    ]

    const [tabName, setTabName] = useState('all')

    const handleChooseSubject = (id) => {
        setTabName(id)
    }

    return (
        <div className={st('funlearning-wrapper')} data-aos="fade-up">
            <div className={st('introduce')}>
                <div className={st('backdrop')}>
                    <img alt="backdrop" src={backdrop} />

                </div>
                <div className={st('download-app')}>
                    <Link to='/'>
                        <img alt="download-app" src={download_app} />
                    </Link>
                </div>
            </div>

            <div className={st('main-content')}>
                <div className={st('title')}>
                    <h1>PLAYING IS THE NEW LEARNING</h1>

                    <p>
                        Every child in the world wants to have fun. So why don't we turn those fun moments into irresistible lessons?
                    </p>
                </div>

                <div className={st('subjects-list')}>
                    {subjectsList.map((list, index) => (
                        <div id={list.id} onClick={(e) => handleChooseSubject(e.target.id)} key={index} className={st('subject', list.id === tabName && 'active')}>
                            <span id={list.id} className={st('subject-title')}>
                                {list.title}
                            </span>    
                        </div>
                    ))}
                </div>

                <div className={st('box_work-list')}  >
                        {tabName === 'english' ? 
                            <CarouselSlider>
                                <BoxWork thumbnail={english_work_1} title='Learn to write numbers' desc="Tracing numbers 1 to 5:  Escape maze game" />
                                <BoxWork thumbnail={english_work_2} title='Dot to dot: shapes' desc="Connect the dot to form a correct Shapes" />
                                <BoxWork thumbnail={english_work_3} title='Counting game for toddlers' desc="Counting 1 to 5: Piano Games" />
                                <BoxWork thumbnail={learn} title='Learn to write numbers' desc="Tracing numbers 1 to 5:  Escape maze game" />
                            </CarouselSlider>
                        : tabName === 'math'  ? 
                            
                            <div className={st('math')}>
                                <h1>Learn how to write numbers</h1>
                                <div className={st('math-sumary')}>
                                    <img alt="math-work-1" src={math_work_1} />
                                </div>
                                <p>
                                    At the request of the Ministry of Education and Training, the Dino Planet program 
                                    provides childrenwith foundational knowledge with topics about Numbers, 
                                    Compound Separation, Flat Shape, Cube,Time, Position, Rule, and Measure.<br></br>

                                    The first pre-primary education application for ages 3-6 to apply Professor Howard 
                                    Gardner's theory of multiple intelligences and follows the new curriculum standards 
                                    set by the Ministry of Education and Training. Providing 1,000 unique lessons, more 
                                    than 10,000 interesting learning activities and creative exercises for the all-round
                                    development of children.
                                </p>

                                <div className={st('math-footer')}>
                                    <img alt="footer" src={math_banner} />

                                    <LeftToRight 
                                        bgcolor={'math-footer-container'}
                                        image={<img alt="banner-math" src={Banner_math_footer} />}
                                        title='Ready to start your adventure with Dino?'
                                        slogan='Alright! Just start downloading the Dino Planet app and explore it by yourself!'
                                        desc={<button className={st('try-free-btn')}>Try for free</button>}
                                    />
                                </div>
                            </div>
                        
                        :
                            <CarouselSlider>
                                <BoxWork thumbnail={english} title='English' desc="Do you want to have fun with your learning? Let's go to Dino World." />
                                <BoxWork thumbnail={math} title='Math' desc="Do you want to have fun with your learning? Let's go to Dino World." />
                                <BoxWork thumbnail={song} title='Song' desc="Do you want to have fun with your learning? Let's go to Dino World." />
                                <BoxWork thumbnail={learn} title='Learn to write numbers' desc="Tracing numbers 1 to 5:  Escape maze game" />
                            </CarouselSlider>
                        }
                    
                </div>

                <div className={st('more')}>
                    <h1>
                        More than <span>3000</span> activites in Dino Planet!
                    </h1>
                    
                    <p>
                        The Dino Planet app has 5000+ learning objectives in more than 3000 activities<br></br> curated by the Dino internation education team.
                    </p>
                </div>  
            </div>
            
            <div className={st('banner')}>
                <div className={st('background')}><img alt="background" src={backgroundBanner} /></div>
                <div className={st('planet')}><img alt="planet" src={planetBanner} /></div>
                <div className={st('grass')}><img alt="grass" src={grass} /></div>
                <div className={st('rocket')} data-aos='fade-right' data-aos-duration="1000" ><img alt="rocket" src={rocket}/></div>

                <LeftToRight image={<img alt="dino" src={dinoImage} />}
                    bgcolor={'customeBanner'} 
                    title="Join the adventure of FunLearning" 
                    slogan="Do you want to have fun with your learning? Let's go to
                    Dino Planet. You can be yourself in this world and explore
                    things on your own terms. You will not be bored in this 
                    planet since we have nearly 200 games here.
                    What are you waiting for? Download now and embark 
                    on the Dino Planet adventure!" 
                    desc={<Link to='/' className={st('download-link')}><button>Free download</button></Link>}
                />
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

export default Funlearning;