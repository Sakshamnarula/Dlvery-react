import axios from 'axios';

const inventory_all = 'http://localhost:8080/inventory/all';
const inventory_add = 'http://localhost:8080/inventory/add';
const executive_add = 'http://localhost:8080/executive/add';
const executive_all = 'http://localhost:8080/executive/all';
const executive_assign = 'http://localhost:8080/executive/assignExecutive';
const executive_getMyInventory = 'http://localhost:8080/executive/getMyInventory'
const inventory_batchAdd = 'http://localhost:8080/inventory/batchAdd'

class InventoryService {

    setupInterceptors() {
        console.log('interceptors are setup')
        let authHeader = 'Basic ' + window.btoa('saksham' + ':' + 'saksham')

        axios.interceptors.request.use(
            (config) => {
                if (true) {
                    config.headers.Authorization = authHeader
                }
                return config
            }
        )
        // axios.interceptors.request.use(
        //     (config) => {
        //         config.headers.Authorization = authHeader
        //     }
        // )
    }

    getAllInventory() {
        // console.log('this is consoled. >>>> ' + window.btoa('user' + ':' + '200d2cef-2c9e-4c2d-bdaf-5260350f9fd6'))
        // let authHeader = 'Basic ' + window.btoa('user' + ':' + '2e68e456-56bf-40b9-ba7a-21f4e4a86308')
        this.setupInterceptors();
        return axios.get(inventory_all)
    }

    addInventory(inventory) {
        //ContactSupportOutlined.lof
        return axios.post(inventory_add, inventory)
    }
    addExecutive(executive) {
        // console.log("AXIOSAddExecutive" + executive)

        return axios.post(executive_add, executive)
    }
    getAllExecutive() {

        return axios.get(executive_all)

        // return axios.get()
    }

    assignExecutive(selectedInventories) {
        // console.log("AXIOS AssignExe" + selectedInventories.length)
        return axios.put(executive_assign, selectedInventories)
    }

    getMyInventory(executive_id) {
        console.log('Ivn Service - GetMyINv ' + executive_id)
        return axios.get(executive_getMyInventory, {
            params: {
                execId: executive_id
            }
        })
    }

    addBatchInventories(inventories) {
        return axios.post(inventory_batchAdd, inventories)

    }
}


export default new InventoryService();