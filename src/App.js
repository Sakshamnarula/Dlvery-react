// import logo from './logo.svg';
import './App.css';
import InventoryComponent from './components/InventoryComponent';
import "bootstrap/dist/css/bootstrap.css"
import AddInventory from './components/AddInventory';
import AddExecutive from './components/AddExecutive';
import Navigation from './components/Navbar';
import AssignExecutive from './components/AssignExecutive'
import ExecutiveDeliveries from './components/executiveDeliveries'
// import DatePicker from 'react-date-picker/dist/DatePicker';
// import "react-datepicker/dist/react-datepicker.css";
// import "../node_modules/react-datepicker/src/stylesheets/datepicker.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Navigation />
      <Router >
        <Switch>
          <Route exact path='/inventory/all' component={InventoryComponent} ></Route>
          <Route exact path='/inventory/add' component={AddInventory}></Route>
          <Route exact path='/executive/add' component={AddExecutive}></Route>
          <Route exact path='/assign/executive' component={AssignExecutive}></Route>
           <Route exact path='/executive/deliveries' component={ExecutiveDeliveries}></Route> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
