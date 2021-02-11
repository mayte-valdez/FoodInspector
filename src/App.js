import { Route, Switch } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Product from './pages/Product';
import './App.css';


function App() {
  return (
    <>
      
      <Switch>
        <Route path='/' exact component={Accueil}/>
        <Route path='/Product/:slug' component={Product}/>
      </Switch>
    </>
  );
}

export default App;
