import React from 'react'

const HomeWelcomSec = ({ heading, children }) => {
    return (
        <section className='hm_welcom_sec'>
            <div className='container'>
                <div className="wel_col_row">
                    {heading &&  <div className='wel_head_left'><h2>{heading}</h2></div> }
                    {children && <div className='wel_text_right'>{children}</div> }
                </div>
            </div>
        </section>
    )
}

export default HomeWelcomSec



