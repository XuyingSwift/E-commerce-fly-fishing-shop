import React from 'react';

import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.action'

import CustomButton from '../CustomButton/CustomButton.component';

import './CollectionItem.styles.scss'

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
        <div className='collection-item'>
            <div 
                className='image' 
                style={{backgroundImage: `url(${imageUrl})`}}
            ></div>
            <div className='item-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted  onClick={() => addItem(item)} className='custom-button'>Add TO Cart</CustomButton>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);