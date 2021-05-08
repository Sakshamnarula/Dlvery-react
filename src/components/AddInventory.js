import React, { useState } from 'react';
import InventoryService from '../services/InventoryService';
// import moment from 'moment'; 
import 'react-date-picker/dist/DatePicker.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: '80ch',
        },
    },
}));

function AddInventory() {

    const classes = useStyles();
    const [item, setItem] = useState({
        productId: "",
        productName: "",
        priority: "",
        checkInDate: new Date(),
        productCategory: "",
        customerAddress: "",
        contactNumber: "",
        checkOutDate: "",
        status: "Added",
        executive: {
            exName: "To Be Assigned",
            exId: "",
            exContact: ""
        }
    })

    function changeProductIdHandler(event) {
        setItem((prevState) => {
            return ({
                ...prevState,
                productId: event.target.value
            })
        })
    }
    function changeProductNameHandler(event) {
        setItem((prevState) => {
            return ({
                ...prevState,
                productName: event.target.value
            })
        })
        // setItem(item.productName = event.target.value)
    }
    function changePriorityHandler(event) {
        setItem((prevState) => {
            return ({
                ...prevState,
                priority: event.target.value
            })
        })
        // setItem({ priority: event.target.value })
    }
    function changeCheckInDateHandler(event) {
        // console.log("checkInDateHandler" + new Date(event).toLocaleDateString())
        // let dt = new Date(event).toLocaleString();
        setItem((prevState) => {
            return ({
                ...prevState,
                checkInDate: new Date(event)
            })
        })
        // setItem({ checkInDate: new Date(event) })
    }

    function changeCustomerAddressHandler(event) {
        setItem((prevState) => {
            return ({
                ...prevState,
                customerAddress: event.target.value
            })
        })
        // setItem({ customerAddress: event.target.value })
    }
    function changeProductCategoryHandler(event) {
        setItem((prevState) => {
            return ({
                ...prevState,
                productCategory: event.target.value
            })
        })
        // setItem({ productCategory: event.target.value })
    }
    function changeContactNumberHandler(event) {
        setItem((prevState) => {
            return ({
                ...prevState,
                contactNumber: event.target.value
            })
        })
        // setItem({ contactNumber: event.target.value })
    }

    function addInventory(i) {
        i.preventDefault()
        console.log("AddInventoryMethod" + item)
        // let inventory = { productId: this.state.productId, productName: this.state.productName, priority: this.state.priority, checkInDate: this.state.checkInDate, productCategory: this.state.productCategory }
        let inventory = item;
        InventoryService.addInventory(inventory)
        // InventoryComponent.fetchData()
    }

    return (
        <div>
            <div className="container">
                <h3 className="text-center"> Add Inventory</h3>
                    <form className={classes.root} noValidate autoComplete="off">

                            <TextField id="standard-basic" label="Product Id" value={item.productId} onChange={changeProductIdHandler} />

                            {/* <input placeholder="ProductId" name="productId" className="form-control" value={item.productId} onChange={changeProductIdHandler}></input> */}
                            <TextField id="standard-basic" label="Product Name" value={item.productName} onChange={changeProductNameHandler} />
                            {/* <input placeholder="ProductName" name="productName" className="form-control" value={item.productName} onChange={changeProductNameHandler}></input> */}

                            <TextField id="standard-basic" label="Product Priority" value={item.priority} onChange={changePriorityHandler} />
                            {/* <input placeholder="Priority" name="priority" className="form-control" value={item.priority} onChange={changePriorityHandler}></input> */}

                            <TextField id="standard-basic" label="Product Category" value={item.productCategory} onChange={changeProductCategoryHandler} />

                            {/* <input placeholder="Category" name="productCategory" className="form-control" value={item.productCategory} onChange={changeProductCategoryHandler}></input> */}

                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Check In Date"
                                    value={item.checkInDate}
                                    selected={item.checkInDate}
                                    onChange={changeCheckInDateHandler}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                            {/* 
                                    <div className="form-group row">
                                        <label>
                                            Check In Date
                                        </label>
                                        <DatePicker
                                            className="form-control"
                                            value={item.checkInDate}
                                            selected={item.checkInDate}
                                            onChange={changeCheckInDateHandler}
                                            name="startDate"
                                            dateFormat="dd/MM/yyyy"
                                        />
                                    </div> */}
                            {/* <input type="text" name="checkInDate" className="form-control" placeHolder="Check In Date" value={item.checkInDate} onChange={changeCheckInDateHandler}></input> */}

                            <TextField id="standard-basic" label="Customer Address" value={item.customerAddress} onChange={changeCustomerAddressHandler} />

                            {/* <input placeholder="Delivery Address" name="customerAddress" className="form-control" value={item.customerAddress} onChange={changeCustomerAddressHandler}></input> */}


                            <TextField id="standard-basic" label="Customer Number" value={item.contactNumber} onChange={changeContactNumberHandler} />

                            {/* <input placeholder="Contact Number" name="contactNumber" className="form-control" value={item.contactNumber} onChange={changeContactNumberHandler}></input> */}
                       
                        <Button variant="contained" onClick={addInventory} color="primary">Add Inventory</Button>
                        {/* <button className="btn btn-success" onClick={addInventory}>Add</button> */}
                    </form>
            </div>
        </div>

    )

}

export default AddInventory;
