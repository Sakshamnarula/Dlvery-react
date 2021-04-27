import React from 'react';
import InventoryService from '../services/InventoryService';
import InventoryComponent from './InventoryComponent'
class AddInventoryComponent extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            productId: "",
            productName: "",
            priority: "",
            checkInDate: "",
            productCategory: "",
            customerAddress:"",
            contactNumber:"",
            checkOutDate:"30, APR, 2021",
            status:"Added",
            executive:{
                exName:"To Be Assigned",
                exId: "",
                exContact: ""
            }          
        }
        this.changePriorityHandler = this.changePriorityHandler.bind(this)
        this.changeProductIdHandler = this.changeProductIdHandler.bind(this)
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this)
        this.changeCheckInDateHandler = this.changeCheckInDateHandler.bind(this)
        this.changeCustomerAddressHandler = this.changeCustomerAddressHandler.bind(this)
        this.changeContactNumberHandler = this.changeContactNumberHandler.bind(this)
        this.changeProductCategoryHandler = this.changeProductCategoryHandler.bind(this)
        this.addInventory = this.addInventory.bind(this)
    }

    addInventory = (i) => {
        i.preventDefault()
        console.log("HAHAHAHHAH"+this.state.productCategory)
        // let inventory = { productId: this.state.productId, productName: this.state.productName, priority: this.state.priority, checkInDate: this.state.checkInDate, productCategory: this.state.productCategory }
        let inventory = this.state;
        InventoryService.addInventory(inventory)
        // InventoryComponent.fetchData()
    }

    changeProductIdHandler = (event) => {
        this.setState({ productId: event.target.value })
    }
    changeProductNameHandler = (event) => {
        this.setState({ productName: event.target.value })
    }
    changePriorityHandler = (event) => {
        this.setState({ priority: event.target.value })
    }
    changeCheckInDateHandler = (event) => {
        this.setState({ checkInDate: event.target.value })
    }
    changeCustomerAddressHandler = (event) => {
        this.setState({ customerAddress: event.target.value })
    }
    changeProductCategoryHandler = (event) => {
        this.setState({ productCategory: event.target.value })
    }
    changeContactNumberHandler = (event) => {
        this.setState({ contactNumber: event.target.value })
    }
    componentDidMount() {
        //InventoryService.getAllInventory().then((response) => {
        //   this.setState({ inventory: response.data });
        //})
        // InventoryService.getAllInventory().then((Response) => {
        //     this.setState({ inventory: Response.data })
        //     console.log(this.state.inventory);
        // })
    }

    render() {
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
                                            <input placeholder="ProductId" name="productId" className="form-control" value={this.state.productId} onChange={this.changeProductIdHandler}></input>
                                        </div>
                                        <div className="form-group row">
                                            <label>
                                                Product Name
                                   </label>
                                            <input placeholder="ProductName" name="productName" className="form-control" value={this.state.productName} onChange={this.changeProductNameHandler}></input>
                                        </div>
                                        <div className="form-group row">
                                            <label>
                                                Priority
                                   </label>
                                            <input placeholder="Priority" name="priority" className="form-control" value={this.state.priority} onChange={this.changePriorityHandler}></input>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-group row">
                                            <label>
                                                Product Category
                                         </label>
                                            <input placeholder="Category" name="productCategory" className="form-control" value={this.state.productCategory} onChange={this.changeProductCategoryHandler}></input>
                                        </div>
                                        <div className="form-group row">
                                            <label>
                                                Check In Date
                                   </label>
                                            <input placeholder="Check In Date" name="checkInDate" className="form-control" value={this.state.checkInDate} onChange={this.changeCheckInDateHandler}></input>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-group row">
                                            <label>
                                                Customer Address
                                         </label>
                                            <input placeholder="Delivery Address" name="customerAddress" className="form-control" value={this.state.customerAddress} onChange={this.changeCustomerAddressHandler}></input>
                                        </div>
                                        <div className="form-group row">
                                            <label>
                                                Contact Number
                                   </label>
                                            <input placeholder="Contact Number" name="contactNumber" className="form-control" value={this.state.contactNumber} onChange={this.changeContactNumberHandler}></input>
                                        </div>
                                    </div>
                                    <button className="btn btn-success" onClick={this.addInventory}>Add</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        )
    }


}

export default AddInventoryComponent;