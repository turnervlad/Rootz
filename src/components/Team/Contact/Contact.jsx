import React from 'react'
import Vector1 from '../../../img/Vector1.svg';
import Vector2 from '../../../img/Vector.svg';
import style from './Contact.module.scss';
import { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const {contact, description, form, formWrap, titleWrap, title, vector1, vector2} = style;
    return (
        <>
            <div className={contact}>
                <div className={titleWrap}>
                    <div className={title}>Get started today!</div>
                    <p className={description}>
                        Learn more about how you can save our planet's nature. From smart consumption to switching to renewable energy, each of us can do our part to save the planet.
                    </p>
                </div>
                <div className={form}>
                    <div className={title}>Log In</div>
                    <div className={formWrap}>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        <button>Book a demo</button>
                        <img className={vector1} src={Vector1} alt='Vector1' />
                        <img className={vector2} src={Vector2} alt='Vector2' />
                    </div>
                </div>
            </div>
        </>
    )
}
