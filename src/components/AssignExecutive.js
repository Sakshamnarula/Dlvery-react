
//import React, { Component } from 'react'
import InventoryService from '../services/InventoryService';
import React, { useState, useEffect } from 'react';
import InventoryComponent from './InventoryComponent'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 220,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  submitButton: {
    margin: theme.spacing(3),
  }
}));


const AssignExecutive = () => {

  const classes = useStyles();

  const [executives, setExecutive] = useState([{
    exName: "",
    exId: "",
    exContact: ""
  }]);
  const [selectedInventories, setSelectedInventories] = useState([{
    productId: "",
    productName: "",
    priority: "",
    checkInDate: "",
    productCategory: "",
    customerAddress: "",
    contactNumber: "",
    checkOutDate: "",
    status: "",
    executive: {
      exName: "",
      exId: "",
      exContact: ""
    }
  }]);
  const [selectedExecutive, setSelectedExecutive] = useState({
    exName: "",
    exId: "",
    exContact: ""
  });
  const [inventoriesVisibility, setInvVisibility] = useState(false)
  const [submitButtonVisi, setSubmitButtonVisi] = useState(false)
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
    setSubmitButtonVisi(true)

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
    // setViewType(1)
    setInvVisibility(true)
  }





  function removeSelected(removeId) {
    console.log("removeSelected " + removeId)
    let filtered = selectedInventories.filter(inv => inv.productId !== removeId)
    setSelectedInventories(filtered)
    // console.log('selected length' + selectedInventories.length)
    if (filtered.length === 1)
      setSubmitButtonVisi(false)
  }

  return (
    <div className="container-fluid">
      <h2 className="text-float"> Assign Executives</h2>
      <Paper elevation={4} className={classes.paper} variant="outlined">

        <FormControl className={classes.formControl}>
          <InputLabel variant="outlined" id="executive-list">Executives</InputLabel>
          <Select
            labelId="executive-list-label"
            id="executive-select"
            value={selectedExecutive} onChange={onSelectChange}
          >
            <MenuItem hidden={inventoriesVisibility} key={0} value={0}>
              <em>Please Select an Executive</em>
            </MenuItem>
            {executives.map((executive) => <MenuItem key={executive.exId} value={executive.exId}>{executive.exName}</MenuItem>)}
          </Select>
          <FormHelperText>Select an Executive to Assign Deliveries To...</FormHelperText>
        </FormControl>
        <Button className={classes.submitButton} variant="contained" hidden={!submitButtonVisi} onClick={() => InventoryService.assignExecutive(selectedInventories)} color='secondary'>Assign</Button>

        <div hidden={!inventoriesVisibility}>
          <InventoryComponent selectVisibility={inventoriesVisibility} onChecked={addSelected} onUnChecked={removeSelected} />
        </div>
      </Paper>
    </div>
  )


}
export default AssignExecutive

