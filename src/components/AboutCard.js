import React from 'react'
import { Col } from 'react-bootstrap'
import '../styles/About.css'
import cv from '../cv.pdf'

const AboutCard = () => {

    return (
        <Col className="mt-3" xs={12}>
            <h5>Kısa Bilgi</h5> <hr></hr>
            <p className="mb-5">
                İçimdeki heyecan taze, enerjim yüksek, sorumluluklarımın bilincinde olup gerektiği gibi yerine getiren, bulunduğu ortama kendinden
                bir şeyler katmayı seven, farklı teknolojilere kısa sürede uyum sağlayabilen bir insanım. Gün içerisinde fazlaca zaman ayırıp
                kendimi geliştirmeye çalışıyorum. Bu her zaman bana kendimi daha iyi hissettirir.
            </p>
            <h4 className="about-head">Hakkımda</h4> <hr></hr>
            <p>
                Merhaba Ben Ahmet Hakan! 23 yaşındayım. Beykent Üniversitesi Bilgisayar Mühendisliği 3.Sınıf
                    öğrencisiyim. Uzun zamandan beri web alanına ilgiliyim. <a className="text-decoration-none" href="https://gelecegiyazanlar.turkcell.com.tr/" target="_blank" rel="noreferrer">Turkcell Geleceği Yazanlar</a>'da HTML,     CSS ve Javascript giriş bölümlerini tamamladıktan sonra sınavlarda da başarılı olup sertifika kazandım. Üniversite eğitimimde öğrendiğim Matlab, C, C++ ve C# dillerinin yanında kendi  çabalarım ile öğrediğim Python dilinde kendi çapımda projeler geliştirdim. En son olarak <a className="text-decoration-none" href="https://kodluyoruz.org" target="_blank" rel="noreferrer">Kodluyoruz</a>'un     bünyesinde olan <a href="https://patika.dev" target="_blank" rel="noreferrer">Patika</a>'da Frontend Web Development Patikası'nı tamamladım.
                </p>
            <p className='mt-4'>
                Yazılımın yanı sıra müzik ile ilgileniyorum. Dinlemek isterseniz Youtube kanal <a href="https://www.youtube.com/channel/UCozyfcHE4abS06yP2lkvSGA" target="_blank" rel="noreferrer">linkimi </a> bırakıyorum :)
            </p>
            <a className='btn btn-outline-primary' href={cv} target="_blank" rel="noreferrer">CV İndir</a>
            <hr></hr>
        </Col>
    )
}

export default AboutCard
