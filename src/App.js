// import logo from './logo.svg';
import './App.css';
import InventoryComponent from './components/InventoryComponent';
import "bootstrap/dist/css/bootstrap.css"
import AddInventory from './components/AddInventory';
import AddExecutive from './components/AddExecutive';
import Navigation from './components/Navbar';
import AssignExecutive from './components/AssignExecutive'
import ExecutiveDeliveries from './components/executiveDeliveries'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Navigation />
      <Router>
        <Switch>
          <Route path='/inventory/all' component={InventoryComponent} ></Route>
          <Route path='/inventory/add' component={AddInventory}></Route>
          <Route path='/executive/add' component={AddExecutive}></Route>
          <Route path='/assign/executive' component={AssignExecutive}></Route>
          <Route path='/executive/deliveries' component={ExecutiveDeliveries}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
