import React, { useEffect, useState } from 'react';
import InventoryService from '../services/InventoryService';
import { OutTable, ExcelRenderer } from 'react-excel-renderer';

function AddInventoryFile() {
  const [inventories, setInventories] = useState([]);
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([])
  function fileHandler(event) {
    let fileObj = event.target.files[0];
    ExcelRenderer(fileObj, (err, resp) => {
      console.log("heloo")
      if (err) {
        console.log(err);
      }
      else {
        setCols(resp.cols)

        setRows(resp.rows)
      }
    });
  }
  function updateData() {
    let finalInv = [];
    for (let i = 1; i < rows.length; i++) {
      let obj = {
        productId: rows[i][0],
        productName: rows[i][1],
        priority: rows[i][2],
        checkInDate: new Date(),
        productCategory: rows[i][3],
        customerAddress: rows[i][4],
        contactNumber: rows[i][5],
        checkOutDate: "",
        status: "Added",
        executive: {
          exName: "To Be Assigned",
          exId: "",
          exContact: ""
        }

      }
      finalInv.push(obj)
    }
    setInventories(finalInv)
    InventoryService.addBatchInventories(finalInv)
  }
  useEffect(() => {
    updateData()
  }, [rows])


  // console.log( rows)
  //console.log(cols)




  return (
    <div>
      <input type="file" onChange={fileHandler} style={{ "padding": "10px" }} />
    </div>

  )

}

export default AddInventoryFile