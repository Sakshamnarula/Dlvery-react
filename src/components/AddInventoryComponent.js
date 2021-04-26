import React from 'react';
import InventoryService from '../services/InventoryService';
import InventoryComponent from './InventoryComponent'
class AddInventoryComponent extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            productId : "",
            productName: "",
            priority: ""
        }
        this.changePriorityHandler=this.changePriorityHandler.bind(this)
        this.changeProductIdHandler=this.changeProductIdHandler.bind(this)
        this.changeProductNameHandler=this.changeProductNameHandler.bind(this)
        this.addInvetory=this.addInvetory.bind()
    }
    addInvetory=(i)=>{
        i.preventDefault()
        let inventory={productId:this.state.productId,productName:this.state.productName,priority:this.state.priority}
        InventoryService.addInventory(inventory)
        InventoryComponent.fetchData()
    }
       
    
    changeProductIdHandler =(event)=>{
        this.setState({productId:event.target.value})
    }
    changeProductNameHandler =(event)=>{
        this.setState({productName:event.target.value})
    }
    changePriorityHandler =(event)=>{
        this.setState({priority:event.target.value})
    }
    componentDidMount() {
        //InventoryService.getAllInventory().then((response) => {
         //   this.setState({ inventory: response.data });
        //})
        InventoryService.getAllInventory().then((Response) => {
            this.setState({inventory: Response.data})
            console.log(this.state.inventory);
        })

    }

    render() {
        return (
            <div>
                <div className="container">
                   <div className="row">
                       <div className="card-col-md-6 offset-md-3">
                       <h3 className="text-center"> Add Inventory</h3>
                       <div className="card-body">
                           <form>
                               <div className="form-group">
                                   <label>
                                       Product Id
                                   </label>
                                   <input placeholder="ProductId" name="productId" className="form-control"value={this.state.productId} onChange={this.changeProductIdHandler}></input>
                               </div>
                               <div className="form-group">
                                   <label>
                                       Product Name
                                   </label>
                                   <input placeholder="ProductName" name="productName" className="form-control"value={this.state.productName} onChange={this.changeProductNameHandler}></input>
                               </div>
                               <div className="form-group">
                                   <label>
                                       Priority
                                   </label>
                                   <input placeholder="Priority" name="priority" className="form-control"value={this.state.priority} onChange={this.changePriorityHandler}></input>
                               </div>
                               <button className="btn btn-success" onClick={this.addInvetory}>Add</button>
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