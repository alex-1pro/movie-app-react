
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ActorsPage from './pages/ActorsPage/ActorsPage';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';


//import TestComp from './TestComp/TestComp';

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route exact path="/actors"> <ActorsPage /></Route>
          <Route exact path="/movies"><MoviesPage /></Route>
        </Switch>
      </HashRouter>



    </div>
  );
}

export default App;
