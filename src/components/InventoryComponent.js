import React, { useState, useEffect } from 'react';
import InventoryService from '../services/InventoryService';

export default InventoryComponent;


function InventoryComponent(props) {

    const [inventory, setInventories] = useState([]);
    const [disp, setDisp] = useState(false);
    
    function parseDate(dt) {
        if (dt == null)
            return "Pending"
        return new Date(dt).toLocaleDateString()
    }

    function fetchData() {
        InventoryService.getAllInventory().then((Response) => {
            // this.setState({ inventory: Response.data })
            setInventories(Response.data)
        })
        // console.log("fetchData Then loaded  >> " + inventory.length)
    }

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        if (props.type === 1) {
            let filtered = inventory.filter(iv => iv.status === 'Added');
            // filtered.forEach((i) => console.log("item <><>< " + i.productId))
            setInventories(filtered)
            // console.log("This should run after data loaded >> " + inventory.filter(iv => iv.status === 'Added'))
            setDisp(false)
        }
        else {
            setDisp(true)
        }
    }, [props.type])

    function checkBoxModify(event) {
        if (event.target.checked)
            props.onChecked(event.target.value)
        else
            props.onUnChecked(event.target.value)
    }

    return (
        <div hidden={props.hidden}>
            <h1>Inventory</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td hidden={disp}>Selected</td>
                        <td>Product Id</td>
                        <td>Product Name</td>
                        <td>Delivery Priority</td>
                        <td>product Category</td>
                        <td>checkInDate</td>
                        <td>checkOutDate</td>
                        <td>customerAddress</td>
                        <td>contactNumber</td>
                        <td>status</td>
                        <td>executive</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        inventory.map(
                            (iv, index) =>
                                <tr key={index}>
                                    <td hidden={disp}> <input type="checkbox" value={iv.productId} onChange={checkBoxModify}></input></td>
                                    <td>{iv.productId}</td>
                                    <td>{iv.productName}</td>
                                    <td>{iv.priority}</td>
                                    <td>{iv.productCategory}</td>
                                    <td>{parseDate(iv.checkInDate)}</td>
                                    <td>{parseDate(iv.checkOutDate)}</td>
                                    <td>{iv.customerAddress}</td>
                                    <td>{iv.contactNumber}</td>
                                    <td>{iv.status}</td>
                                    {/* {console.log( "TD ME CONSOLE >>>> " + iv.executive.exName)} */}
                                    <td>{iv.executive.exName}</td>
                                </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
    )
}