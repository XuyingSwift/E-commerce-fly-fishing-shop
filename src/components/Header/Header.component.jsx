import React from 'react';

import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/fish.svg';

import './Header.styles.scss';

import {auth} from '../../firebase/firebase.utils'

import CartIcon from '../Cart-Icon/CartIcon.component';

const Header = ({currentUser}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>Shop</Link>
                <Link className='option' to='/shop'>Contact</Link>
                
                { currentUser ? 
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> 
                    : <Link className='option' to='/signin'>Sign in</Link>}
                <CartIcon/>
            </div>
            
        </div>
    )
}


// return somthing back!
const mapStateToProps = state => ({
   currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);