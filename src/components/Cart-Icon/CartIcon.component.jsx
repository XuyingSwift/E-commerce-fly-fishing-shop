import React from 'react';
import * as s from './CartIcon.styles'
import { toggleCartHidden } from '../../redux/cart/cart.action';
import {connect}from 'react-redux';

const CartIcon = ({toggleCartHidden}) => {
    return (
       <s.CartContainer>
        <s.ShoppingIcon  onClick={toggleCartHidden}/>
        <s.ItemCountContainer>0</s.ItemCountContainer>
       </s.CartContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);