import React, { useState, useEffect } from 'react';
import InventoryService from '../services/InventoryService';
import ListComponent from './ListComponent'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import Dialog from '@material-ui/core/Dialog';
import { Container, TextField } from '@material-ui/core';
import 'date-fns';
import Button from '@material-ui/core/Button';

export default ExecutiveDeliveries;


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'relative'
    },
    paper: {
        padding: theme.spacing(4, 4, 4, 4),
        width: 'relative'
    },
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: 'relative',
        },
    },
}));


function ExecutiveDeliveries(props) {

    const classes = useStyles();
    const [openInvDetail, setOpenInvDetail] = React.useState(false);
    const [selectedInv, setSelectedInv] = React.useState({
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
    });

    function handleOpen() {
        setOpenInvDetail(true);
    };

    function handleClose() {
        setOpenInvDetail(false);
    };

    const [inventory, setInventory] = useState([])



    function fetchData() {
        let toBeFilter = []
        // console.log("fetchData Then loaded  >> " + inventory.length)
        InventoryService.getMyInventory(7).then((Response) => {
            console.log("GetMyInventory" + Response.data.length)

            toBeFilter = Response.data
            let filtered = toBeFilter.filter(inv => inv.status === 'Assigned')
            //console.log(filtered)
            setInventory(filtered)

        })

    }

    function inventoryClick(inv) {
        // setSelectedInv(inventory.find(selectId))
        console.log("Inventory Item is clicked" + inv.productName)
        setSelectedInv(inv)
        handleOpen()
    }
    function filterInv() {

        let filtered = inventory.filter(inv => inv.status === 'Assigned')
        //console.log(filtered)
        setInventory(filtered)
    }
    function deliverItem(data) {
        data.status = 'Delivered'
        InventoryService.addInventory(data)
        filterInv()
    }
    function notDeliverItem(data) {
        data.status = 'Attempted'
        data.executive.exName = "To Be Assigned"
        data.executive.exId = ""
        data.executive.exContact = ""
        data.checkOutDate = ""
        InventoryService.addInventory(data)
        filterInv()
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div >
            <h1>Inventory to Be Delivered by "Executive_Name"</h1>
            <ListComponent inputList={inventory} entireProps={[]} onClick={inventoryClick} clicker={true}></ListComponent>
            <Dialog className={classes.modal} open={openInvDetail} onClose={handleClose} closeAfterTransition TransitionComponent={Zoom}>
                {/* <Zoom in={openInvDetail} style={{ transitionDelay: openInvDetail ? '500ms' : '500ms' }}> */}
                    <Paper elevation={4} className={classes.paper} variant="outlined">
                        <form noValidate className={classes.root} autoComplete="off">
                            <TextField id="standard-basic" label="Product Id" value={selectedInv.productId} readOnly={true} />
                            <TextField id="standard-basic" label="Product Name" value={selectedInv.productName} readOnly={true} />
                            <TextField id="standard-basic" label="Product Priority" value={selectedInv.priority} readOnly={true} />
                            <TextField id="standard-basic" label="Product Category" value={selectedInv.productCategory} readOnly={true} />
                            <TextField id="standard-basic" label="Checkin Date" value={new Date(selectedInv.checkInDate).toLocaleDateString()} readOnly={true} />
                            <TextField id="standard-basic" label="Checkout Date" value={new Date(selectedInv.checkOutDate).toLocaleDateString()} readOnly={true} />
                            <TextField id="standard-basic" label="Customer Address" value={selectedInv.customerAddress} readOnly={true} />
                            <TextField id="standard-basic" label="Customer Number" value={selectedInv.contactNumber} readOnly={true} />
                        </form>
                        <Button variant="contained" onClick={() => { deliverItem(selectedInv) }} color="primary">Delivered</Button>
                        <Button variant="contained" onClick={() => { notDeliverItem(selectedInv) }} color="primary">Un-Delivered</Button>
                    </Paper>
                {/* </Zoom> */}
            </Dialog>
        </div>
    )
}