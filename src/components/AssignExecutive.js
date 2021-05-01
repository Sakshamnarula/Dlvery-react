
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

