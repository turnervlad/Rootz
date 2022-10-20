import React from 'react'
import style from './First.module.scss';
import HeaderDesktop from './Header/HeaderDesktop';
import HeaderMobile from './Header/HeaderMobile';
import NatureComp from './Nature/Nature';

function First() {
    return (
        <>
            <div className={style.first}>
                <HeaderDesktop />
                <HeaderMobile />
                <NatureComp />
            </div>
        </>
    )
}

export default First;