import React from 'react'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import instagram from '../images/instagram.png'
import '../styles/Social.css'

const Social = () => {
    return (
        <div>
            <a className="mr-4" href="https://www.linkedin.com/in/aydin-ahmet" target="_blank" rel="noreferrer">
                <img className="linkedin" src={linkedin} style={{ height: 35, width: 35 }} alt="linkedin" />
            </a>
            <a className="mr-4" href="https://instagram.com/ahmeethakann" target="_blank" rel="noreferrer">
                <img className="instagram" src={instagram} style={{ height: 35, width: 35 }} alt="instagram"/>
            </a>
            <a href="https://github.com/ahmethakanaydin" target="_blank" rel="noreferrer">
                <img className="github" src={github} style={{ height: 35, width: 35 }} alt="github"/>
            </a>
        </div>
    )
}

export default Social
