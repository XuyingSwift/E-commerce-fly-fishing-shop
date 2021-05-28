import React from 'react';
import * as s from './CartIcon.styles'

const CartIcon = () => {
    return (
       <s.CartContainer>
        <s.ShoppingIcon/>
        <s.ItemCountContainer>0</s.ItemCountContainer>
       </s.CartContainer>
    )
}

export default CartIcon;