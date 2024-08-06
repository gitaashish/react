import React from 'react';


const subscribePop = ({title, children}) => {
    return (
        <div className='popup_wrap'>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default subscribePop