
//import React, { Component } from 'react'
import InventoryService from '../services/InventoryService';
import React, { useState, useEffect } from 'react';
import Child from './child'
import InventoryComponent from './InventoryComponent'

const AssignExecutive = () => {
  const [executives, setExecutive] = useState([]);
  const [selectedInventories, setSelectedInventories] = useState([]);
  const [selectedExecutive, setSelectedExecutive] = useState();

  // const [value1, setNewVal] = useState("5")
  const fetchData = () => {
    InventoryService.getAllExecutive().then((Response) => {
      setExecutive(Response.data)
      // console.log("SCENE KYA HAI")
    })
  }

  // function handleChange(newValue) {
  //   setNewVal(newValue)
  // }

  useEffect(() => {
    fetchData()
  }, [])

  function addSelected(selectedId) {
    //to be impl
    // console.log("addSelected" + selectedId)


    let obj = {
      productId: selectedId,
      productName: "",
      priority: "",
      checkInDate: "",
      productCategory: "",
      customerAddress: "",
      contactNumber: "",
      checkOutDate: "",
      status: "",
      executive: executives[selectedExecutive - 1]
    }

    // console.log(obj)
    setSelectedInventories(prevState => [...prevState, obj])
    // console.log("Seeleeectedinventories" + selectedInventories.length)


  }


  
  

  function removeSelected(removeId){
      console.log("removeSelected " + removeId)
      let filtered = selectedInventories.filter(inv => inv.productId !== removeId)
      // console.log("Filter Length"+filtered.length)
      setSelectedInventories(filtered)
      // setInventories()
      // console.log(selectedInventories)
  }

  return (
    <div className="container">
      <div className="col">
        <div className="card-col-md">
          <h3 className="text-center"> Assign Executives</h3>
          <div className="card-body">
            <form>
              <div className="col-md">
                <div className="form-group row mw-100">
                  Executives :
                  <select className="col-md" value={selectedExecutive} onChange={e => setSelectedExecutive(e.target.value)}                  >
                    {executives.map((executive) => <option key={executive.exId} value={executive.exId}>{executive.exName}</option>)}
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <InventoryComponent type="assignExecutive" onChecked={addSelected} onUnChecked={removeSelected} />
      <button onClick={() => console.log("REEFRESH"+ selectedInventories + " >> " + selectedInventories.length)}>Refresh</button>
    </div>

  )


}
export default AssignExecutive

