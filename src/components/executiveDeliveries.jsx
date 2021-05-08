import React, { useState, useEffect } from 'react';
import InventoryService from '../services/InventoryService';
import ListComponent from './ListComponent'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import Dialog from '@material-ui/core/Dialog';


export default ExecutiveDeliveries;


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        padding: theme.spacing(4,4,4,4),
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

    function handleOpen (){
        setOpenInvDetail(true);
    };

    function handleClose(){
        setOpenInvDetail(false);
    };

    const [inventory, setInventory] = useState([])



    function fetchData() {
        // console.log("fetchData Then loaded  >> " + inventory.length)
        InventoryService.getMyInventory(7).then((Response) => {
            console.log("GetMyInventory" + Response.data.length)
            setInventory(Response.data)
        })

    }

    function inventoryClick(inv) {
        // setSelectedInv(inventory.find(selectId))
        console.log("Inventory Item is clicked" + inv.productName)
        setSelectedInv(inv)
        handleOpen()
    }


    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div >
            <h1>Inventory to Be Delivered by "Executive_Name"</h1>
            <ListComponent inputList={inventory} entireProps={[]} onClick={inventoryClick} ></ListComponent>
            
            <Dialog
                className={classes.modal}
                open={openInvDetail}
                onClose={handleClose}
                closeAfterTransition
                >
                    <Paper elevation={4} className={classes.paper} variant="outlined">
                            {selectedInv.productName}
                    </Paper>
            </Dialog>
        </div>
    )
}