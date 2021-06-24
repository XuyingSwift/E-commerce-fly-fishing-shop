
import React from 'react';
import './App.css';
import {HomePage} from './pages/HomePage/HomePage.component.jsx'
import {Route, Switch, Redirect} from 'react-router-dom'
import ShopPage from './pages/Shop/ShopPage.component'
import Header from './components/Header/Header.component';
import SignInPage from './pages/SignIn-SignUp/SignInPage.component';
import {auth, createUserProfileDocument, addCollectionAndDocuments} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/userReducer/user.actions'
import CheckoutPage from './pages/Checkout/Checkout.component'
import {selectCollectionsForPreview} from './redux/shop/shop.selector'
import {selectCurrentUser} from './redux/userReducer/user.selector';
import { createStructuredSelector } from 'reselect';



class App extends React.Component {

  
  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser, collectionArray} = this.props;

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
      addCollectionAndDocuments('collections', collectionArray)
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
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/signin' render={
            () => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInPage/>)}
          />
        </Switch>
     
      </div>
    )};
 
}

const mapStateToProps = createStructuredSelector(
  {
    currentUser: selectCurrentUser,
    collectionArray: selectCollectionsForPreview
  }
)
const mapDispatchProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchProps )(App);
