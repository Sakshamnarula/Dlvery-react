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
import AddInventoryFile from './AddInventoryFile'
import Paper from '@material-ui/core/Paper';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const useStyles = makeStyles((theme) => ({
    paper: {
        margin: '2ch',
        height: '60%',
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    root: {
        justifyContent: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        padding: '5ch'
    },
    accordion: {
        flexBasis: '100%'
    },
    accordionDetails: {
        flexBasis: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        // display: 'grid',
        '& > *': {
            display: 'grid',
            margin: theme.spacing(3),
            width: '60ch'
            // alignSelf: 'center',
        },
    },
}));

function AddInventory() {

    const [accr1, setAccr1] = useState(true);
    const [accr2, setAccr2] = useState(false);
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

    function toggleAccr() {
        console.log('switchflip')
        setAccr1(!accr1);
        setAccr2(!accr2);
    }

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
        <div >
            <h3 className="text-center"> Add Inventory</h3>
            <div className='container'>
                <div className={classes.root} >
                    <Accordion className={classes.accordion} expanded={accr1}  >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header" onClick={toggleAccr}
                        >
                            Add via Upload File
                    </AccordionSummary>
                        <AccordionDetails className={classes.accordionDetails}>
                            <Paper elevation={4} className={classes.paper} variant="outlined">
                                <AddInventoryFile></AddInventoryFile>
                            </Paper>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.accordion} expanded={accr2} >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header" onClick={toggleAccr}
                        >
                            Fill-in Manually
                    </AccordionSummary>
                        <AccordionDetails className={classes.accordionDetails}>

                            <Paper elevation={4} className={classes.paper} variant="outlined">
                                <form className={classes.form} noValidate autoComplete="off">
                                    <TextField id="standard-basic" label="Product Id" value={item.productId} onChange={changeProductIdHandler} />
                                    <TextField id="standard-basic" label="Product Name" value={item.productName} onChange={changeProductNameHandler} />
                                    <TextField id="standard-basic" label="Product Priority" value={item.priority} onChange={changePriorityHandler} />
                                    <TextField id="standard-basic" label="Product Category" value={item.productCategory} onChange={changeProductCategoryHandler} />
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
                                    <TextField id="standard-basic" label="Customer Address" value={item.customerAddress} onChange={changeCustomerAddressHandler} />
                                    <TextField id="standard-basic" label="Customer Number" value={item.contactNumber} onChange={changeContactNumberHandler} />
                                    <Button id="standard-basic" variant="contained" onClick={addInventory} color="primary">Add Inventory</Button>
                                </form>
                            </Paper>
                        </AccordionDetails>
                    </Accordion>
                </div>
                {/* <div className={classes.root} >

                <Paper elevation={4} className={classes.paper} variant="outlined">
                    <form className={classes.form} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Product Id" value={item.productId} onChange={changeProductIdHandler} />
                        <TextField id="standard-basic" label="Product Name" value={item.productName} onChange={changeProductNameHandler} />
                        <TextField id="standard-basic" label="Product Priority" value={item.priority} onChange={changePriorityHandler} />
                        <TextField id="standard-basic" label="Product Category" value={item.productCategory} onChange={changeProductCategoryHandler} />
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
                        <TextField id="standard-basic" label="Customer Address" value={item.customerAddress} onChange={changeCustomerAddressHandler} />
                        <TextField id="standard-basic" label="Customer Number" value={item.contactNumber} onChange={changeContactNumberHandler} />
                        <Button id="standard-basic" variant="contained" onClick={addInventory} color="primary">Add Inventory</Button>
                    </form>
                </Paper>
            </div> */}
            </div >
        </div>

    )

}

export default AddInventory;
