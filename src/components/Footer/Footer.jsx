import React from 'react';
import LinkedIn from '../../img/LinkedIn.png';
import Facebook from '../../img/Facebook.png';
import Twitter from '../../img/Twitter.png';
import style from './Footer.module.scss';

export default function Footer() {
    const {footer, headquarters, contact, right, social, title} = style
    return (
        <>
            <div className={footer}>
                <div className={contact}>
                    <div className={title}>Contacts</div>
                    <div>2019 Rootz Foundation.<br />All rights reserved</div>
                </div>
                <div className={right}>
                    <div className={headquarters}>
                        <div className={title}>Headquarters</div>
                        <div>1234 Taliban<br />Los Angeles, La 1234567<br />(123) 456-7890</div>
                    </div>
                    <div className={social}>
                        <div className={title}>Social media</div>
                        <div>
                            <img src={Twitter} alt='Twitter' />
                            <img src={Facebook} alt='Facebook' />
                            <img src={LinkedIn} alt='LinkedIn' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
