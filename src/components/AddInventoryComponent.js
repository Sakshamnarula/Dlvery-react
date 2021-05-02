import React, { useState } from 'react';
import InventoryService from '../services/InventoryService';
// import moment from 'moment'; 
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';

// class AddInventoryComponent extends React.Component {



//     constructor(props) {
//         super(props)
//         this.state = {
//             productId: "",
//             productName: "",
//             priority: "",
//             checkInDate: "",
//             productCategory: "",
//             customerAddress: "",
//             contactNumber: "",
//             checkOutDate: "",
//             status: "Added",
//             executive: {
//                 exName: "To Be Assigned",
//                 exId: "",
//                 exContact: ""
//             }
//         }

//         // const [checkInDate, changeCheckInDateHandler] = this.setState(new Date());

//         this.changePriorityHandler = this.changePriorityHandler.bind(this)
//         this.changeProductIdHandler = this.changeProductIdHandler.bind(this)
//         this.changeProductNameHandler = this.changeProductNameHandler.bind(this)
//         this.changeCheckInDateHandler = this.changeCheckInDateHandler.bind(this)
//         this.changeCustomerAddressHandler = this.changeCustomerAddressHandler.bind(this)
//         this.changeContactNumberHandler = this.changeContactNumberHandler.bind(this)
//         this.changeProductCategoryHandler = this.changeProductCategoryHandler.bind(this)
//         this.addInventory = this.addInventory.bind(this)
//     }

//     addInventory = (i) => {
//         i.preventDefault()
//         console.log("HAHAHAHHAH" + this.state.checkInDate)
//         // let inventory = { productId: this.state.productId, productName: this.state.productName, priority: this.state.priority, checkInDate: this.state.checkInDate, productCategory: this.state.productCategory }
//         let inventory = this.state;
//         InventoryService.addInventory(inventory)
//         // InventoryComponent.fetchData()
//     }

//     changeProductIdHandler = (event) => {
//         this.setState({ productId: event.target.value })
//     }
//     changeProductNameHandler = (event) => {
//         this.setState({ productName: event.target.value })
//     }
//     changePriorityHandler = (event) => {
//         this.setState({ priority: event.target.value })
//     }
//     changeCheckInDateHandler = (event) => {
//         console.log("checkInDateHandler" + new Date(event).toLocaleDateString())
//         // let dt = new Date(event).toLocaleString();
//         this.setState({ checkInDate: new Date(event) })
//     }
//     changeCustomerAddressHandler = (event) => {
//         this.setState({ customerAddress: event.target.value })
//     }
//     changeProductCategoryHandler = (event) => {
//         this.setState({ productCategory: event.target.value })
//     }
//     changeContactNumberHandler = (event) => {
//         this.setState({ contactNumber: event.target.value })
//     }
//     componentDidMount() {
//         console.log("THIS IS THE ADD INVENTORY COMP")
//         //InventoryService.getAllInventory().then((response) => {
//         //   this.setState({ inventory: response.data });
//         //})
//         // InventoryService.getAllInventory().then((Response) => {
//         //     this.setState({ inventory: Response.data })
//         //     console.log(this.state.inventory);
//         // })
//     }

//     render() {
//         return (
//             <div>
//                 <div className="container">
//                     <div className="col">
//                         <div className="card-col-md">
//                             <h3 className="text-center"> Add Inventory</h3>
//                             <div className="card-body">
//                                 <form>
//                                     <div className="col-md">
//                                         <div className="form-group row">
//                                             Product Id
//                                             <input placeholder="ProductId" name="productId" className="form-control" value={this.state.productId} onChange={this.changeProductIdHandler}></input>
//                                         </div>
//                                         <div className="form-group row">
//                                             <label>
//                                                 Product Name
//                                    </label>
//                                             <input placeholder="ProductName" name="productName" className="form-control" value={this.state.productName} onChange={this.changeProductNameHandler}></input>
//                                         </div>
//                                         <div className="form-group row">
//                                             <label>
//                                                 Priority
//                                    </label>
//                                             <input placeholder="Priority" name="priority" className="form-control" value={this.state.priority} onChange={this.changePriorityHandler}></input>
//                                         </div>
//                                     </div>
//                                     <div className="col-md">
//                                         <div className="form-group row">
//                                             <label>
//                                                 Product Category
//                                          </label>
//                                             <input placeholder="Category" name="productCategory" className="form-control" value={this.state.productCategory} onChange={this.changeProductCategoryHandler}></input>
//                                         </div>
//                                         <div className="form-group row">
//                                             <label>
//                                                 Check In Date
//                                         </label>
//                                             <DatePicker
//                                                 className="form-control"
//                                                 value={this.state.checkInDate}
//                                                 selected={this.state.checkInDate}
//                                                 onChange={this.changeCheckInDateHandler}
//                                                 name="startDate"
//                                                 dateFormat="dd/MM/yyyy"
//                                             />
//                                             {/* <input type="text" name="checkInDate" className="form-control" placeHolder="Check In Date" value={this.state.checkInDate} onChange={this.changeCheckInDateHandler}></input> */}
//                                         </div>
//                                     </div>
//                                     <div className="col-md">
//                                         <div className="form-group row">
//                                             <label>
//                                                 Customer Address
//                                          </label>
//                                             <input placeholder="Delivery Address" name="customerAddress" className="form-control" value={this.state.customerAddress} onChange={this.changeCustomerAddressHandler}></input>
//                                         </div>
//                                         <div className="form-group row">
//                                             <label>
//                                                 Contact Number
//                                    </label>
//                                             <input placeholder="Contact Number" name="contactNumber" className="form-control" value={this.state.contactNumber} onChange={this.changeContactNumberHandler}></input>
//                                         </div>
//                                     </div>
//                                     <button className="btn btn-success" onClick={this.addInventory}>Add</button>
//                                 </form>
//                             </div>

//                         </div>
//                     </div>
//                 </div>


//             </div>
//         )
//     }


// }

export default AddInventoryComponent;


function AddInventoryComponent() {

    const [item, setItem] = useState({
        productId: "",
        productName: "",
        priority: "",
        checkInDate: "",
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
                <div className="col">
                    <div className="card-col-md">
                        <h3 className="text-center"> Add Inventory</h3>
                        <div className="card-body">
                            <form>
                                <div className="col-md">
                                    <div className="form-group row">
                                        Product Id
                                            <input placeholder="ProductId" name="productId" className="form-control" value={item.productId} onChange={changeProductIdHandler}></input>
                                    </div>
                                    <div className="form-group row">
                                        <label>
                                            Product Name
                                   </label>
                                        <input placeholder="ProductName" name="productName" className="form-control" value={item.productName} onChange={changeProductNameHandler}></input>
                                    </div>
                                    <div className="form-group row">
                                        <label>
                                            Priority
                                   </label>
                                        <input placeholder="Priority" name="priority" className="form-control" value={item.priority} onChange={changePriorityHandler}></input>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-group row">
                                        <label>
                                            Product Category
                                         </label>
                                        <input placeholder="Category" name="productCategory" className="form-control" value={item.productCategory} onChange={changeProductCategoryHandler}></input>
                                    </div>
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
                                        {/* <input type="text" name="checkInDate" className="form-control" placeHolder="Check In Date" value={item.checkInDate} onChange={changeCheckInDateHandler}></input> */}
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-group row">
                                        <label>
                                            Customer Address
                                         </label>
                                        <input placeholder="Delivery Address" name="customerAddress" className="form-control" value={item.customerAddress} onChange={changeCustomerAddressHandler}></input>
                                    </div>
                                    <div className="form-group row">
                                        <label>
                                            Contact Number
                                   </label>
                                        <input placeholder="Contact Number" name="contactNumber" className="form-control" value={item.contactNumber} onChange={changeContactNumberHandler}></input>
                                    </div>
                                </div>
                                <button className="btn btn-success" onClick={addInventory}>Add</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}