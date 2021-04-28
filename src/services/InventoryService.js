import axios from 'axios';

const inventory_all = 'http://localhost:8080/inventory/all';
const inventory_add = 'http://localhost:8080/inventory/add';
const executive_add = 'http://localhost:8080/executive/add';
const executive_all = 'http://localhost:8080/executive/all';


class InventoryService {
    getAllInventory() {
        return axios.get(inventory_all)
    }
    addInventory(inventory) {
        return axios.post(inventory_add, inventory)
    }
    addExecutive(executive){
        console.log("AXIOSAddExecutive" + executive)

        return axios.post(executive_add, executive)
    }
    getAllExecutive() {
        console.log("AXIOSgetAllExecutive")
        return axios.get(executive_all)
    }
}

export default new InventoryService();