import './App.css';
import Customerlist from './components/Customerlist';
import Traininglist from './components/Traininglist';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
<div className="App">
      <BrowserRouter>
        <div>
          <Link to="/Customerlist">Käyttäjät</Link>{' '}
          <Link to="/Traininglist">Treenit</Link>{' '}
          <Switch>
            <Route path="/Customerlist" component={Customerlist} />
            <Route path="/Traininglist" component={Traininglist} />
            <Route render={() => <h1>Tervetuloa treenisivulle</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
      </div>
  );
}

export default App;
