import React from 'react';
import * as s from './CartIcon.styles'
import { toggleCartHidden } from '../../redux/cart/cart.action';
import {connect}from 'react-redux';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
       <s.CartContainer>
        <s.ShoppingIcon  onClick={toggleCartHidden}/>
        <s.ItemCountContainer>{itemCount}</s.ItemCountContainer>
       </s.CartContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount 
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);