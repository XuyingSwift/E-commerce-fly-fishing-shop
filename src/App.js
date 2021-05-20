
import './App.css';
import {HomePage} from './pages/HomePage.component.jsx'
import {Route} from 'react-router-dom'

 const Hats = () => {
   return (
     <div> Hello Hats</div>
   )
 }
function App() {
  return (
    <div>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/hats' component={Hats} />
    </div>
  );
}

export default App;
