import React, { useState, useEffect } from 'react';
import InventoryService from '../services/InventoryService';

// class InventoryComponent1 extends React.Component {


//     constructor(props) {
//         super(props)
//         this.state = {
//             inventory: []
//         }
//         // this.changePriorityHandler = this.changePriorityHandler.bind(this)

//         this.parseDate = this.parseDate.bind(this)
//     }

//     parseDate = (dt) => {
//         if (dt == null)
//             return "Pending"
//         return new Date(dt).toLocaleDateString()
//     }

//     fetchData() {
//         InventoryService.getAllInventory().then((Response) => {
//             this.setState({ inventory: Response.data })
//             // console.log( " >>>> " + Response.data.executive.exName);
//             // console.log("Aaj Ki Date > " + new Date(this.state.inventory[3].checkInDate))
//         })
//     }

//     // componentWillMount(){

//     // }

//     componentDidMount() {
//         //InventoryService.getAllInventory().then((response) => {
//         //   this.setState({ inventory: response.data });
//         //})
//         console.log("THIS IS THE INVENTORY COMP")
//         this.fetchData()
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Inventory</h1>
//                 <table className="table table-striped">
//                     <thead>
//                         <tr>
//                             <td>Product Id</td>
//                             <td>Product Name</td>
//                             <td>Delivery Priority</td>
//                             <td>product Category</td>
//                             <td>checkInDate</td>
//                             <td>checkOutDate</td>
//                             <td>customerAddress</td>
//                             <td>contactNumber</td>
//                             <td>status</td>
//                             <td>executive</td>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             this.state.inventory.map(
//                                 (iv, index) =>
//                                     <tr key={index}>
//                                         <td>{iv.productId}</td>
//                                         <td>{iv.productName}</td>
//                                         <td>{iv.priority}</td>
//                                         <td>{iv.productCategory}</td>
//                                         <td>{this.parseDate(iv.checkInDate)}</td>
//                                         <td>{this.parseDate(iv.checkOutDate)}</td>
//                                         <td>{iv.customerAddress}</td>
//                                         <td>{iv.contactNumber}</td>
//                                         <td>{iv.status}</td>
//                                         {/* {console.log( "TD ME CONSOLE >>>> " + iv.executive.exName)} */}
//                                         <td>{iv.executive.exName}</td>
//                                     </tr>
//                             )
//                         }
//                     </tbody>

//                 </table>
//             </div>
//         )
//     }


// }

export default InventoryComponent;


function InventoryComponent(props) {

    const [inventory, setInventories] = useState([]);
    // const[]
    const [disp, setDisp] = useState(false);
    // const[count,setCount] = useState(0)



    function parseDate(dt) {
        if (dt == null)
            return "Pending"
        return new Date(dt).toLocaleDateString()
    }

    function fetchData() {
        InventoryService.getAllInventory().then((Response) => {
            // this.setState({ inventory: Response.data })
            setInventories(Response.data)
            // setCount(count+1)
            // console.log( " >>>> " + Response.data.executive.exName);
            // console.log("Aaj Ki Date > " + new Date(this.state.inventory[3].checkInDate))
        })
    }

    useEffect(() => {
        console.log("InventoryComp Rendered - useEffect Triggered")
        // 
        fetchData();
        if (props.type === 'assignExecutive') {
            setDisp(false)
        }
        else {
            setDisp(true)
        }
    },[])

    function checkBoxModify(event) {

        if(event.target.checked)
        props.onChecked(event.target.value)
        else
        props.onUnChecked(event.target.value)
        
    }

    return (
        <div>
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
                                    <td hidden={disp}> <input type="checkbox" value={iv.productId}  onChange={checkBoxModify}></input></td>
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