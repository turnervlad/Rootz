import React from 'react'
import { useState } from 'react';
import style from './Faq.module.scss';

export default function Faq() {
    const {faq, left, right, title, description} = style;
    const [advantages, setAdvantages] = useState({
        first: true,
        second: false,
        third: false
    })
    return (
        <>
            <div className={faq}>
                <div className={left}>
                    <div className={title}>Ready to Get started?</div>
                    <div className={description}>
                        <p>
                            When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.
                        </p>
                    </div>
                    <button>Contact us</button>
                </div>
                <div className={right}>
                    <div>
                        <div>
                            <div className={title}>What can I do to protect our planet?</div>
                             {advantages.first && <div className={description}>Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources</div>}
                        </div>
                        <div>
                            <button onClick={() => setAdvantages({...advantages, first: !advantages.first})}>{advantages.first ? '-' : '+'}</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className={title}>How to save nature ecology?</div>
                            {advantages.second && <div className={description}>Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources</div>}
                        </div>
                        <div>
                            <button onClick={() => setAdvantages({...advantages, second: !advantages.second})}>
                                {advantages.second ? '-' : '+'}
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className={title}>What is nature conservation?</div>
                            {advantages.third && <div className={description}>Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources</div>}
                        </div>
                        <div>
                            <button onClick={() => setAdvantages({...advantages, third: !advantages.third})}>
                                {advantages.third ? '-' : '+'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
