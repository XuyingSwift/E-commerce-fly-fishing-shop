
import React from 'react';
import './App.css';
import {HomePage} from './pages/HomePage/HomePage.component.jsx'
import {Route, Switch} from 'react-router-dom'
import ShopPage from './pages/ShopPage/ShopPage.component';
import Header from './components/Header/Header.component';
import SignInPage from './pages/SignIn-SignUp/SignInPage.component';
import {auth} from './firebase/firebase.utils';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInPage}/>
        </Switch>
     
      </div>
    )};
 
}

export default App;
