import axios from 'axios';

const inventory_all = 'http://localhost:8080/inventory/all';
const inventory_add = 'http://localhost:8080/inventory/add';
const executive_add = 'http://localhost:8080/executive/add';
const executive_all = 'http://localhost:8080/executive/all';
const executive_assign = 'http://localhost:8080/executive/assignExecutive';
const executive_getMyInventory = 'http://localhost:8080/executive/getMyInventory'

class InventoryService {
    getAllInventory() {
        return axios.get(inventory_all)
    }
    addInventory(inventory) {
        return axios.post(inventory_add, inventory)
    }
    addExecutive(executive) {
        // console.log("AXIOSAddExecutive" + executive)

        return axios.post(executive_add, executive)
    }
    getAllExecutive() {
        // console.log("AXIOSgetAllExecutive")
        return axios.get(executive_all)
    }

    assignExecutive(selectedInventories) {
        // console.log("AXIOS AssignExe" + selectedInventories.length)
        return axios.put(executive_assign,selectedInventories)
    }

    getMyInventory(executive_id){
        console.log('Ivn Service - GetMyINv '  + executive_id)
        return axios.get(executive_getMyInventory, {
            params: {
              execId: executive_id
            }
          })
    }
}

export default new InventoryService();