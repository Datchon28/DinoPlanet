import classNames from "classnames/bind";
import style from './Funlearning.scss'
import LeftToRight from '../../Components/Banners/LeftToRight'
import Subjects from "./Subjects/Subjects";

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

// Banner
import dinoImage from '../../assets/img/Funlearning/Introduce/5 5.png'
import backgroundBanner from '../../assets/img/Funlearning/Introduce/1 2.png'   
import planetBanner from '../../assets/img/Funlearning/Introduce/2 1.png'
import grass from '../../assets/img/Funlearning/Introduce/Vector (1).png'
import rocket from '../../assets/img/Home/Introduce/rocket.png'
import city from '../../assets/img/Funlearning/Introduce/Vector (2).png'
import { Link } from "react-router-dom";
import React, { useState } from "react";

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

    const exercise = [
       {    
            id:'english',
            english: 
                [
                    {
                        exercise_id : '123',
                        exercise_title: 'Learn to write numbers',
                        backdrop: english_work_1,
                        description: 'Tracing numbers 1 to 5: Escape maze game',
                        
                    }, 
                    {
                        exercise_id : '456',
                        exercise_title: 'Dot to dot: shapes',
                        backdrop: english_work_2,
                        description: 'Connect the dot to form a correct Shapes'
                    },
                    {
                        exercise_id : '789',
                        exercise_title: 'Counting game for toddlers',
                        backdrop: english_work_3,
                        description: 'Counting 1 to 5: Piano Games'
                    }
                ], 
        },
        {   
            id: 'math', 
            math:  
            [
                {
                    exercise_id : '',
                    exercise_title: '',
                    backdrop: '',
                    description: ''
                }
            ]
            
        },
        {
            id: 'song',
            song:
            [
                {
                    exercise_id : '',
                    exercise_title: '',
                    backdrop: '',
                    description: ''
                }
            ]
        }
      
    ]

    const [tabName, setTabName] = useState('all')
    const [openExercise, setOpenExcercise] = useState(false)
    const [subject, setSubject] = useState([])
    const [exerciseChoose, setExerciseChoose] = useState([])

    const handleOpenExercise = (e) => {
        const exercise_id = e.target.id
        setExerciseChoose(subject[0].english.filter(item => item.exercise_id === exercise_id))
        setOpenExcercise(!openExercise)
    }
    
    const handleChooseSubject = (id) => {
        setTabName(id)
        const subject = exercise.filter(item => item.id === id)
        setSubject(subject)
        setOpenExcercise(false)
    
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
                <svg className='wave-border' width="1920" height="76" viewBox="0 0 1920 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M900.497 0.826706C843.344 1.49964 774.261 7.15914 693.249 17.8052C651.355 22.2052 609.462 24.1377 567.568 23.6028C497.411 24.0514 427.79 19.1856 358.708 9.00539C294.307 1.15454 227.34 -1.56307 157.807 0.852581C109.012 2.37099 40.4319 8.57403 -47.9327 19.4617C-132.275 27.7439 -210.929 27.1918 -283.896 17.8052C-349.788 8.33246 -412.489 2.83686 -472 1.31845V75.3667H1001.21V4.1137C969.857 1.47374 936.286 0.378085 900.497 0.826706Z" fill="white"/>
                    <path d="M2328.18 0.826706C2271.03 1.49964 2201.95 7.15914 2120.94 17.8052C2079.04 22.2052 2037.15 24.1377 1995.26 23.6028C1925.1 24.0514 1855.48 19.1856 1786.4 9.00539C1721.99 1.15454 1655.03 -1.56307 1585.49 0.852581C1536.7 2.37099 1468.12 8.57403 1379.75 19.4617C1295.41 27.7439 1216.76 27.1918 1143.79 17.8052C1077.9 8.33246 1015.2 2.83686 955.688 1.31845V75.3667H2428.89V4.1137C2397.54 1.47374 2363.97 0.378085 2328.18 0.826706Z" fill="white"/>
                </svg>

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

                <div className={st('box_work-list')}>
                    {openExercise ? <Subjects title={exerciseChoose[0].exercise_title} background={exerciseChoose[0].backdrop} />
                    : tabName === 'english' ? 
                        <CarouselSlider>
                            {
                                exercise[0].english.map((item, index) => (
                                    <BoxWork key={index} id={item.exercise_id} onClick={(e) => handleOpenExercise(e)} thumbnail={item.backdrop} title={item.exercise_title} desc="Tracing numbers 1 to 5:  Escape maze game" />
                                ))
                            }
                            <BoxWork onClick={handleOpenExercise} thumbnail={learn} title='Learn to write numbers' desc="Tracing numbers 1 to 5:  Escape maze game" />
                        </CarouselSlider>
                    
                        :
                        <CarouselSlider>
                            <BoxWork onClick={handleOpenExercise} thumbnail={english} title='English' desc="Do you want to have fun with your learning? Let's go to Dino World." />
                            <BoxWork onClick={handleOpenExercise} thumbnail={math} title='Math' desc="Do you want to have fun with your learning? Let's go to Dino World." />
                            <BoxWork onClick={handleOpenExercise} thumbnail={song} title='Song' desc="Do you want to have fun with your learning? Let's go to Dino World." />
                            <BoxWork onClick={handleOpenExercise} thumbnail={learn} title='Learn to write numbers' desc="Tracing numbers 1 to 5:  Escape maze game" />
                        </CarouselSlider>
                    }
                </div>


                <div className={st('more', openExercise && 'hidden')}>
                    <h1>
                        More than <span>3000</span> activites in Dino Planet!
                    </h1>
                    
                    <p>
                        The Dino Planet app has 5000+ learning objectives in more than 3000 activities<br></br> curated by the Dino internation education team.
                    </p>
                </div>  
            </div>
            
            <div className={st('banner')}>
                <svg className="wave-border" width="1920" height="76" viewBox="0 0 1920 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M886.497 0.826706C829.344 1.49964 760.261 7.15914 679.249 17.8052C637.355 22.2052 595.462 24.1377 553.568 23.6028C483.411 24.0514 413.79 19.1856 344.708 9.00539C280.307 1.15454 213.34 -1.56307 143.806 0.852581C95.0117 2.37099 26.432 8.57403 -61.9327 19.4617C-146.275 27.7439 -224.929 27.1918 -297.896 17.8052C-363.788 8.33246 -426.489 2.83686 -486 1.31845V75.3667H987.207V4.1137C955.857 1.47374 922.286 0.378085 886.497 0.826706Z" fill="#3D066E"/>
                    <path d="M2314.18 0.826706C2257.03 1.49964 2187.95 7.15914 2106.94 17.8052C2065.04 22.2052 2023.15 24.1377 1981.26 23.6028C1911.1 24.0514 1841.48 19.1856 1772.4 9.00539C1707.99 1.15454 1641.03 -1.56307 1571.49 0.852581C1522.7 2.37099 1454.12 8.57403 1365.75 19.4617C1281.41 27.7439 1202.76 27.1918 1129.79 17.8052C1063.9 8.33246 1001.2 2.83686 941.688 1.31845V75.3667H2414.89V4.1137C2383.54 1.47374 2349.97 0.378085 2314.18 0.826706Z" fill="#3D066E"/>
                </svg>
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

export default Funlearning;