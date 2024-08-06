import React from 'react'


const HeroSec = ({title, bgImg}) => {
    return (
        <section className="bg_bnner bnner_sec" style={ bgImg != undefined ? {backgroundImage:`url(${bgImg})`} : {background:"black"} }>
            <div className="container">
                    {title && <div className="bnner_heading"><h1>{title}</h1></div>}
            </div>
        </section>
    )
}

export default HeroSec



