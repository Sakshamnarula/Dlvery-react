import React, { useState, useEffect } from 'react';
import InventoryService from '../services/InventoryService';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';


export default InventoryComponent;

function parseDate(dt) {
    if (dt == null)
        return "Pending"
    return new Date(dt).toLocaleDateString()
}

let columns = [

    { id: 'productId', label: 'Product Id', minWidth: 170 },
    { id: 'productName', label: 'Product Name', minWidth: 100 },
    { id: 'priority', label: 'Priority', minWidth: 100 },
    { id: 'productCategory', label: 'Product Category', minWidth: 100 },
    { id: 'checkInDate', label: 'Check In Date', minWidth: 100, format: (val) => parseDate(val) },
    { id: 'checkOutDate', label: 'Check Out Date', minWidth: 100, format: (val) => parseDate(val) },
    { id: 'customerAddress', label: 'Customer Address', minWidth: 100 },
    { id: 'status', label: 'Status', minWidth: 100 },
    { id: 'exName', label: 'Executive', minWidth: 100, format: (val) => val },
];

const useStyles = makeStyles({
    root: {
        width: '100%'
    },
    container: {
        maxHeight: 500
    },
});


function InventoryComponent(props) {

    const classes = useStyles();
    const [inventory, setInventories] = useState([]);
    const [disp, setDisp] = useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    function fetchData() {
        InventoryService.getAllInventory().then((Response) => {
            // this.setState({ inventory: Response.data })
            setInventories(Response.data)
        })
        // console.log("fetchData Then loaded  >> " + inventory.length)
    }

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        if (props.type === 1) {
            let filtered = inventory.filter(iv => iv.status === 'Added');
            setInventories(filtered)
            columns.unshift({ id: 'selected', label: 'Selected', minWidth: 170 })
            setDisp(true)
        }
    }, [props.type])

    function checkBoxModify(event) {
        if (event.target.checked)
            props.onChecked(event.target.value)
        else
            props.onUnChecked(event.target.value)
    }

    return (
        <div hidden={props.hidden}>
            <h1>Inventory</h1>
            {/* <table className="table table-striped">
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
                                    <td hidden={disp}> <input type="checkbox" value={iv.productId} onChange={checkBoxModify}></input></td>
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
            {/* <td>{iv.executive.exName}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table> */}
            <div className="m-5">
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => {
                                    return (<TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}>
                                        {column.label}
                                    </TableCell>)
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {inventory.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((inv) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={inv.productId}>
                                        {columns.map((column) => {
                                            if (column.id === 'selected') {
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        <Checkbox
                                                            value={inv.productId} onChange={checkBoxModify}
                                                            inputProps={{ 'aria-label': 'select all desserts' }}
                                                        />
                                                    </TableCell>
                                                );
                                            }
                                            else if (column.id === 'exName') {
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {inv.executive.exName}
                                                    </TableCell>
                                                );
                                            } else {
                                                const value = inv[column.id]
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                                    </TableCell>
                                                );
                                            }
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 7,12]}
                    component="div"
                    count={inventory.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
            </div>
        </div>
    )
}