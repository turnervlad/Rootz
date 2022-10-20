import React, { useState } from 'react'
import Vector from '../../../img/Vector.png';
import ParrotDesktop from '../../../img/Parrot-desktop.png';
import Nature from '../../../img/Headline.png';
import style from './Nature.module.scss';

export default function NatureComp() {
    const [place, setPlace] = useState('');
    const { natureLeft, natureImg, search, natureRight, parrotDesktop } = style;
    return (
        <>
            <section className={style.nature}>
                <div className={natureLeft}>
                    <div>
                        <img className={natureImg} src={Nature} alt='nature' />
                    </div>
                    <div>
                        <p>
                            The scale of the challenges facing our planet can seem daunting, but we can all do something.
                        </p>
                    </div>
                    <div className={search}>
                        <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} placeholder="Find the place to help" />
                        <button>Search</button>
                        <img src={Vector} alt='vector' />
                    </div>
                </div>
                <div className={natureRight}>
                    <img className={parrotDesktop} src={ParrotDesktop} alt='parrotdesktop' />
                </div>
            </section>
        </>
    )
}
