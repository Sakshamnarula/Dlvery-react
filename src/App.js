import logo from './logo.svg';
import './App.css';
import InventoryComponent from './components/InventoryComponent';
import "bootstrap/dist/css/bootstrap.css"
import AddInventoryComponent from './components/AddInventoryComponent';
import Navigation from './components/Navbar';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Switch>
          <Route exact path='/inventory/all' component={InventoryComponent}></Route>
          <Route exact path='/inventory/add' component={AddInventoryComponent}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
