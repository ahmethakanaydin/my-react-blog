import React from 'react'
import AboutCard from '../components/AboutCard'
import ImageCard from '../components/ImageCard'
import InfoCard from '../components/InfoCard'
import '../styles/About.css'

const About = () => {

    return (
        <div className='container about mt-3'>
            <ImageCard />
            <AboutCard />
            <InfoCard/>
        </div>
    )
}

export default About

