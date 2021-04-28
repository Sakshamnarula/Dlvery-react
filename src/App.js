// import logo from './logo.svg';
import './App.css';
import InventoryComponent from './components/InventoryComponent';
import "bootstrap/dist/css/bootstrap.css"
import AddInventoryComponent from './components/AddInventoryComponent';
import AddExecutiveComponent from './components/AddExecutive';
import Navigation from './components/Navbar';
// import DatePicker from 'react-date-picker/dist/DatePicker';
// import "react-datepicker/dist/react-datepicker.css";
// import "../node_modules/react-datepicker/src/stylesheets/datepicker.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Navigation />
      <Router>
        <Switch>
          <Route exact path='/inventory/all' component={InventoryComponent} ></Route>
          <Route exact path='/inventory/add' component={AddInventoryComponent}></Route>
          <Route exact path='/executive/add' component={AddExecutiveComponent}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
