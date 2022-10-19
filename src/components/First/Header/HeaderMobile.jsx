import React from 'react'
import Logo from '../../../img/Logo.png';
import style from './HeaderMobile.module.scss';
import IconMenu from '../../../img/Union.png';
import MenuClose from '../../../img/icon-close.png';
import { useState } from 'react';


export default function HeaderMobile() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className={style.mobileHeaderWrap}>
            <header className={style.mobile}>
                <div>
                    <a href='/'>
                        <img src={Logo} alt='logo' />
                    </a>
                </div>
                <div>
                    <img onClick={() => setIsMenuOpen(!isMenuOpen)} src={isMenuOpen ? MenuClose : IconMenu} alt='menu' />
                </div>
            </header>
            {isMenuOpen && 
                <div className={style.burger}>
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
                </div>
            }
        </div>
    )
}
