import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PokemonsPage from './pages/Pokemons';
import DetailsPage from './pages/Details';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={PokemonsPage} />
          <Route exact path='/:name' component={DetailsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;