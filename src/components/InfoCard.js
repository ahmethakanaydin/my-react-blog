import React from 'react'
import { Col , Image, ListGroup } from 'react-bootstrap'
import html from '../images/icons/html5.png'
import css from '../images/icons/css3.png'
import js from '../images/icons/js.png'
import react from '../images/icons/react.png'
import bootstrap from '../images/icons/bootstrap.png'
import git from '../images/icons/git.png'
import python from '../images/icons/python.png'


const InfoCard = () => {
    return (
        <Col xs={12}>
            <h5>Kısa Bilgi</h5> <hr></hr>
            <p className="mb-5">
                İçimdeki heyecan taze, enerjim yüksek, sorumluluklarımın bilincinde olup gerektiği gibi yerine getiren, bulunduğu ortama kendinden 
                bir şeyler katmayı seven, farklı teknolojilere kısa sürede uyum sağlayabilen bir insanım. Gün içerisinde fazlaca zaman ayırıp 
                kendimi geliştirmeye çalışıyorum. Bu her zaman bana kendimi daha iyi hissettirir.
            </p> <hr></hr>
            <h5>Kullandığım Teknolojiler</h5> <hr></hr>
            <Col xl={{offset: 3}} xs={12} className="mb-5 d-none d-sm-block">
                <ListGroup horizontal>
                    <ListGroup.Item><Image src={html} style={{height: 40}} /></ListGroup.Item>
                    <ListGroup.Item><Image src={css} style={{height: 40}} /></ListGroup.Item>
                    <ListGroup.Item><Image src={js} style={{height: 40}} /></ListGroup.Item>
                    <ListGroup.Item><Image src={react} style={{height: 40}} /></ListGroup.Item>
                    <ListGroup.Item><Image src={bootstrap} style={{height: 40}} /></ListGroup.Item>
                    <ListGroup.Item><Image src={python} style={{height: 40}} /></ListGroup.Item>
                    <ListGroup.Item><Image src={git} style={{height: 40}} /></ListGroup.Item>
                </ListGroup>
            </Col>

            <Col xl={{offset: 3}} xs={12} className="mb-5">
                <ListGroup horizontal className="d-block d-sm-none">
                    <ListGroup.Item className="mb-1"><Image  src={html} style={{height: 40}} /></ListGroup.Item>
                    <ListGroup.Item className="mb-1"><Image src={css} style={{height: 40}} /></ListGroup.Item>
                    <ListGroup.Item className="mb-1"><Image src={js} style={{height: 40}} /></ListGroup.Item>
                    <ListGroup.Item className="mb-1"><Image src={react} style={{height: 40}} /></ListGroup.Item>
                    <ListGroup.Item className="mb-1"><Image src={bootstrap} style={{height: 40}} /></ListGroup.Item>
                    <ListGroup.Item className="mb-1"><Image src={python} style={{height: 40}} /></ListGroup.Item>
                    <ListGroup.Item className="mb-1"><Image src={git} style={{height: 40}} /></ListGroup.Item>
                </ListGroup>
            </Col>

        </Col>
    )
}

export default InfoCard
