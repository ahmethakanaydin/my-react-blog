import React from 'react'
import { Col } from 'react-bootstrap'
import '../styles/AboutCard.css'
import cv from '../cv.pdf'

const AboutCard = () => {
    return (
            <Col className="mt-3" xs={12}>
                <h3 className="about-head"> Hakkımda</h3>
                <p>
                    Merhaba Ben Ahmet Hakan! 23 yaşındayım. Beykent Üniversitesi Bilgisayar Mühendisliği 3.Sınıf
                    öğrencisiyim. Uzun zamandan beri web alanına ilgiliyim.<a className="text-decoration-none" href="https://gelecegiyazanlar.turkcell.com.tr/">Turkcell Geleceği Yazanlar</a>'daHTML,     CSS ve Javascript giriş bölümlerini tamamladıktan sonra sınavlarda da başarılı olup sertifika kazandım. Üniversite eğitimimde öğrendiğim Matlab, C, C++ ve C# dillerinin yanında kendi  çabalarım ile öğrediğim Python dilinde kendi çapımda projeler geliştirdim. En son olarak <a className="text-decoration-none" href="https://kodluyoruzorg">Kodluyoruz</a>'un     bünyesinde olan <a href="https://patika.dev">Patika</a>'da Frontend Web Development Patikası'nı tamamladım.
                </p>
                <p className='mt-4'>
                    Yazılımın yanı sıra müzik ile ilgileniyorum. Belki dinlersiniz diye youtube kanal <a href="https://www.youtube.com/channel/UCozyfcHE4abS06yP2lkvSGA">linkimi </a> bırakıyorum :)
                </p>
                <a className='btn btn-outline-primary' href={cv}>CV İndir</a>
                <hr></hr>
            </Col>
        
    )
}

export default AboutCard
