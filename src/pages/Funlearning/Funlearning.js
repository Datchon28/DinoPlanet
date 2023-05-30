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
import { Link, useParams } from "react-router-dom";
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