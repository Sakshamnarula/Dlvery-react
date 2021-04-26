import React from 'react';
import InventoryService from '../services/InventoryService';

class InventoryComponent extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            inventory: []
        }
    }
    fetchData() {
        InventoryService.getAllInventory().then((Response) => {
            this.setState({ inventory: Response.data })
            console.log(this.state.inventory);
        })
    }
    componentDidMount() {
        //InventoryService.getAllInventory().then((response) => {
        //   this.setState({ inventory: response.data });
        //})
        this.fetchData()


    }

    render() {
        return (
            <div>
                <h1>Inventory</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Product Id</td>
                            <td>Product Name</td>
                            <td>Delivery Priority</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.inventory.map(
                                iv =>
                                    <tr key="iv.productId">
                                        <td>{iv.productId}</td>
                                        <td>{iv.productName}</td>
                                        <td>{iv.priority}</td>
                                    </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        )
    }


}

export default InventoryComponent;