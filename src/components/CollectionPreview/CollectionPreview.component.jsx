import React from 'react';

import './CollectionPreview.styles.scss'

import CollectionItem from '../CollectionItem/CollectionItem.component'

const CollectionPreview = ({title, items}) => {
    return (
        <div 
        className='collection-container'>
            <h1 className='title'> {title} </h1>
            <div className='preview'>
                {items
                    .filter((item, index) => index < 4)
                    .map(item => (<CollectionItem key={item.id} item={item}/>))
                }
            </div>
        </div>
    )
}

export default CollectionPreview;