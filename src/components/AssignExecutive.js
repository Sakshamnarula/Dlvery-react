<<<<<<< HEAD
//import React, { Component } from 'react'
import InventoryService from '../services/InventoryService';
import React, {useState, useEffect} from 'react';


const  AssignExecutive =   () => {   
    const [executive, setExecutive] = useState([]);
    const [inventory, setInventory] = useState([]);
    const [selectedExecutive, setSelectedExecutive] = useState('');

    const fetchData = () =>  {
        InventoryService.getAllExecutive().then((Response) => {
           setExecutive(Response.data)
        })

        InventoryService.getAllInventory().then((Response) => {
            setInventory(Response.data)
         })
    }
    useEffect(() => {
        fetchData()
      });
    
        return (
            <div className="row">
                <div className="col-md-12">
      <select
        value={selectedExecutive}
        onChange={e => setSelectedExecutive(e.target.value)}
        >
        {executive.map((executive) => <option key={executive.exId} value={executive.exId}>{executive.exName}</option>)}
      </select>
    </div>
    </div>
        )
    

}
export default AssignExecutive
=======
//placeholder

import React from 'react';
import react from 'react';
import bootstrap from 'react-bootstrap'

class AssignExecutive extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            executives: [],
            inventories: [],

        }

        this.fetchExecutives = this.fetchExecutives.bind(this)
        this.fetchInventories = this.fetchInventories.bind(this)

    }

    fetchInventories = () => {

    }

    fetchExecutives = () => {

    }

    componentDidMount() {

    }

    render() {
        return (<div>
            <div className="container">
                <div className="col">
                    <div className="card-col-md">
                        <h3 className="text-center"> Assign Executive</h3>
                        <div className="d-flex">

                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}
export default AssignExecutive;
>>>>>>> 0d72321f9cf1e371605f4ba2283cc8c8a717aea7
