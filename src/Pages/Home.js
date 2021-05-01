import  React from 'react'
import Social from '../components/Social'
import { Carousel } from 'react-bootstrap'
import MainBox from '../components/MainBox';
import '../styles/Home.css'

const Home = () => {

    return (
        <div className="home">
            <Carousel>
                <Carousel.Item>
                    <div className="carousel-item active mainImage"></div>
                <MainBox />
                <Social/>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Home;
