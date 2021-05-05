
//import React, { Component } from 'react'
import InventoryService from '../services/InventoryService';
import React, { useState, useEffect } from 'react';
import InventoryComponent from './InventoryComponent'

const AssignExecutive = () => {
  const [executives, setExecutive] = useState([]);
  const [selectedInventories, setSelectedInventories] = useState([]);
  const [selectedExecutive, setSelectedExecutive] = useState();
  const [inventoriesVisibility, setInvVisibility] = useState(false)
  const [viewType, setViewType] = useState(0)
  // const [value1, setNewVal] = useState("5")
  const fetchData = () => {
    InventoryService.getAllExecutive().then((Response) => {
      // setExecutive(Response.data)
      setExecutive(Response.data)
      // console.log("ResponseData" + Response.data)
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
      checkOutDate: new Date(),
      status: "Assigned",
      executive: executives[selectedExecutive - 1]
    }

    // console.log(obj)
    setSelectedInventories(prevState => [...prevState, obj])
    // console.log("Seeleeectedinventories" + selectedInventories.length)


  }

  function onSelectChange(e) {
    setSelectedExecutive(e.target.value)
    setViewType(1)
    setInvVisibility(true)
  }





  function removeSelected(removeId) {
    console.log("removeSelected " + removeId)
    let filtered = selectedInventories.filter(inv => inv.productId !== removeId)
    // console.log("Filter Length"+filtered.length)
    setSelectedInventories(filtered)
    // setInventories()
    // console.log(selectedInventories)
  }

  return (
    <div className="container-fluid">
      <div className="">
        <h2 className="text-float"> Assign Executives</h2>
        <div className="card col">
          <div className="card-body">
            <div className="input-group">
              <div className="input-group-prepend">
                <button className="btn btn-success col-md" type="button">Select Executives</button>
              </div>
              <select className="custom-select col-md" value={selectedExecutive} onChange={onSelectChange}>
                <option hidden={!inventoriesVisibility} key={0} value={0}>Please Select an Executive</option>
                {executives.map((executive) => <option key={executive.exId} value={executive.exId}>{executive.exName}</option>)}
              </select>
            </div>
            <div hidden={!inventoriesVisibility}>
            <InventoryComponent selectVisibility={inventoriesVisibility} onChecked={addSelected} onUnChecked={removeSelected} />
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-success col-md" onClick={() => InventoryService.assignExecutive(selectedInventories)}>Submit</button>
    </div>
  )


}
export default AssignExecutive

