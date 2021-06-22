import React from 'react';
import {connect} from 'react-redux';
import CartItem from '../Cart-Item/CartItem.component';
import {selectCartItems} from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect';
import { withRouter} from 'react-router';
import CustomButton from '../CustomButton/CustomButton.component';
import {toggleCartHidden} from '../../redux/cart/cart.action';
import './Cart-dropdwon.styles.scss'

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))}
            </div>
            <CustomButton onClick={
                () => 
                {history.push('/checkout');
                 dispatch(toggleCartHidden());
            }
            }>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));

