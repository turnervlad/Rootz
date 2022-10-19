import React from 'react'
// import Vector1 from '../../img/Vector1.svg';
// import Vector2 from '../../img/Vector.svg';
import TeamImg from '../../img/Team.png';
import TeamImgMobile from '../../img/Team-mobile.png';
import Contact from './Contact/Contact';
import Faq from './Faq/Faq';
import style from './Team.module.scss';

export default function Team() {
    const {team, teamDesktop, teamMobile, photos, title} = style;
    return (
        <>
            <section className={team}>
                <div className={title}>
                    <h1>Our top team</h1>
                    <p>Learn more about how you can save our planet's nature. </p>
                </div>
                <div className={photos}>
                    <img className={teamDesktop} src={TeamImg} alt='team' />
                    <img className={teamMobile} src={TeamImgMobile} alt='team' />
                </div>
                <Contact />
                <Faq />
            </section>
        </>
    )
}
