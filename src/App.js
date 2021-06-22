
import React from 'react';
import './App.css';
import {HomePage} from './pages/HomePage/HomePage.component.jsx'
import {Route, Switch, Redirect} from 'react-router-dom'
import ShopPage from './pages/ShopPage/ShopPage.component';
import Header from './components/Header/Header.component';
import SignInPage from './pages/SignIn-SignUp/SignInPage.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/userReducer/user.actions'
import CheckoutPage from './pages/Checkout/Checkout.component'


class App extends React.Component {

  
  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });

        });
      }
      console.log("app current user", userAuth)
      setCurrentUser(userAuth);
    });


  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/signin' render={
            () => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInPage/>)}
          />
        </Switch>
     
      </div>
    )};
 
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})
const mapDispatchProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchProps )(App);
