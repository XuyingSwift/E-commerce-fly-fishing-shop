
import './App.css';
import {HomePage} from './pages/HomePage/HomePage.component.jsx'
import {Route, Switch} from 'react-router-dom'
import ShopPage from './pages/ShopPage/ShopPage.component';
import Header from './components/Header/Header.component';
import SignInPage from './pages/SignIn-SignUp/SignInPage.component';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInPage}/>
      </Switch>
   
    </div>
  );
}

export default App;
