import React from 'react'
import { Col, Image } from 'react-bootstrap'
import Avatar from '../images/ahmet.jpg'
import '../styles/About.css'
import Social from './Social'

const ImageCard = () => {
    return (
        <div>
            <Col className="mt-3 mb-5" xs={12} >
                <Image className="avatar mb-2" src={Avatar} roundedCircle thumbnail />
                <h5 className="text-center">Ahmet Hakan Aydın</h5>
                <span className="text-center"><p>Beykent Üniversitesi <br></br>Bilgisayar Mühendisliği 3.Sınıf</p></span>
                <p className="text-center"><a href="mailto:ahmet@hakanaydin.me">ahmet@hakanaydin.me</a></p>
                <div className="text-center"><Social /></div>
                <hr></hr>
            </Col>
        </div>
    )
}

export default ImageCard

