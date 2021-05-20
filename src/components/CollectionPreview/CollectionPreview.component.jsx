import React from 'react';

import './CollectionPreview.styles.scss'

const CollectionPreview = ({title, items}) => {
    return (
        <div 
        className='collection-container'>
            <h1 className='title'> {title} </h1>
            <div className='preview'>
                {items
                    .filter((item, index) => index < 4)
                    .map(item => (<div key={item.key}>{item.name} </div>))
                }
            </div>
        </div>
    )
}

export default CollectionPreview;