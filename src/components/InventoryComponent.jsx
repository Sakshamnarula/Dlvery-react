import React, { useState, useEffect } from 'react';
import InventoryService from '../services/InventoryService';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import ListComponent from './ListComponent'


export default InventoryComponent;

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: '80ch',
        },
    },
}));

function InventoryComponent(props) {
    const [inventory, setInventories] = useState([]);
    const classes = useStyles();


    function fetchData() {
        InventoryService.getAllInventory().then((Response) => {
            setInventories(Response.data)
        })
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div >
            <Paper elevation={4} className={classes.paper} variant="outlined">

                <h1 hidden={props.selectVisibility}>Inventory</h1>
                <ListComponent inputList={inventory} selectVisibility={props.selectVisibility} onChecked={props.onChecked} onUnChecked={props.onUnChecked} ></ListComponent>
            </Paper>
        </div>
    )
}