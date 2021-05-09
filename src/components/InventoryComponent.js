import React, { useState, useEffect } from 'react';
import InventoryService from '../services/InventoryService';

import ListComponent from './ListComponent'


export default InventoryComponent;

// function parseDate(dt) {
//     if (dt == null)
//         return "Pending"
//     return new Date(dt).toLocaleDateString()
// }

// let columns = [

//     { id: 'productId', label: 'Product Id', minWidth: 170 },
//     { id: 'productName', label: 'Product Name', minWidth: 100 },
//     { id: 'priority', label: 'Priority', minWidth: 100 },
//     { id: 'productCategory', label: 'Product Category', minWidth: 100 },
//     { id: 'checkInDate', label: 'Check In Date', minWidth: 100, format: (val) => parseDate(val) },
//     { id: 'checkOutDate', label: 'Check Out Date', minWidth: 100, format: (val) => parseDate(val) },
//     { id: 'customerAddress', label: 'Customer Address', minWidth: 100 },
//     { id: 'status', label: 'Status', minWidth: 100 },
//     { id: 'exName', label: 'Executive', minWidth: 100, format: (val) => val },
// ];

// const useStyles = makeStyles({
//     root: {
//         width: '100%'
//     },
//     container: {
//         maxHeight: 500
//     },
// });

function InventoryComponent(props) {
    const [inventory, setInventories] = useState([]);

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
            <h1>Inventory</h1>
            <ListComponent inputList={inventory} entireProps={props}></ListComponent>
        </div>
    )
}