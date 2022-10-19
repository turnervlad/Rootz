import React from 'react'
import Logo from '../../../img/Logo.png';
import style from './HeaderDesktop.module.scss';

export default function HeaderDesktop() {
    return (
        <>
            <header className={style.desktop}>
                <div>
                    <a href='/'>
                        <img src={Logo} alt='logo' />
                    </a>
                </div>
                <div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Our Missions</a></li>
                        <li><a href="/">Places</a></li>
                        <li><a href="/">Team</a></li>
                    </ul>
                </div>
                <div>
                    <button>Apply</button>
                </div>
            </header>
        </>
    )
}
