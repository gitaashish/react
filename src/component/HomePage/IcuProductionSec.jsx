import React, { Children } from 'react'
import PropTypes from 'prop-types';


const HomeZigzagSec = ({ imgURL, children, learnmoreURL }) => {
    return (
        <div className="zigzag_item">
            <div className="zigzag_img_col">
                <img src={imgURL} alt="apparel" />
            </div>
            <div className="zigzag_txt_col">
                {children && <div className='txtContentstyle'>{children}
                    {learnmoreURL && <a href={learnmoreURL}>Learn More</a>}
                </div>}
            </div>
        </div>
    )
}

HomeZigzagSec.propTypes = {
    imgURL: PropTypes.string.isRequired,
};
export default HomeZigzagSec



