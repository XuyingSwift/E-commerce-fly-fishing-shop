import React from 'react';

import './MenuItem.styles.scss';

export const MenuItem = ({title, imageUrl, size}) => {
    return(
        <div 
        className={`${size} menu-item`}
        >
            <div 
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
              }}/>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>Show Now</span>
                <div> </div>
            </div>
        </div>
       
    )
}