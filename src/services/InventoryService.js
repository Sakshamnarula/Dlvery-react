import axios from 'axios';

const inventory_uri = 'http://localhost:8080/inventory/all';
const inventory_uri_add= 'http://localhost:8080/inventory/add';

class InventoryService {
    getAllInventory(){
            return axios.get(inventory_uri)
    }
    addInventory(inventory){
        return axios.post(inventory_uri_add,inventory)
    }

}

export default new InventoryService();