import React from 'react'
import { Col , Image, ListGroup } from 'react-bootstrap'
import html from '../images/icons/html5.png'
import css from '../images/icons/css3.png'
import js from '../images/icons/js.png'
import react from '../images/icons/react.png'
import bootstrap from '../images/icons/bootstrap.png'
import git from '../images/icons/git.png'
import python from '../images/icons/python.png'
import '../styles/InfoCard.css'

const InfoCard = () => {
    return (
        <Col xs={12}>
            <h5>Kullandığım Teknolojiler</h5> <hr></hr>
            <Col  xs={12} className="mb-5 d-none d-sm-block">
                <ListGroup className="offset-3" horizontal>
                    <ListGroup.Item><Image src={html} /></ListGroup.Item>
                    <ListGroup.Item><Image src={css} /></ListGroup.Item>
                    <ListGroup.Item><Image src={js} /></ListGroup.Item>
                    <ListGroup.Item><Image src={react} /></ListGroup.Item>
                    <ListGroup.Item><Image src={bootstrap} /></ListGroup.Item>
                    <ListGroup.Item><Image src={python} /></ListGroup.Item>
                    <ListGroup.Item><Image src={git} /></ListGroup.Item>
                </ListGroup>
            </Col>
            <Col  xs={12} className="mb-5">
                <ListGroup horizontal className="d-block d-sm-none">
                    <ListGroup.Item className="mb-1"><Image src={html} /></ListGroup.Item>
                    <ListGroup.Item className="mb-1"><Image src={css} /></ListGroup.Item>
                    <ListGroup.Item className="mb-1"><Image src={js} /></ListGroup.Item>
                    <ListGroup.Item className="mb-1"><Image src={react} /></ListGroup.Item>
                    <ListGroup.Item className="mb-1"><Image src={bootstrap} /></ListGroup.Item>
                    <ListGroup.Item className="mb-1"><Image src={python} /></ListGroup.Item>
                    <ListGroup.Item className="mb-1"><Image src={git} /></ListGroup.Item>
                </ListGroup>
            </Col>
        </Col>
    )
}

export default InfoCard
