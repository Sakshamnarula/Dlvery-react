import React, { useState, useEffect } from 'react';

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
import Skeleton from '@material-ui/lab/Skeleton';



function parseDate(dt) {
    if (dt == null)
        return "Pending"
    return new Date(dt).toLocaleDateString()
}

let columns_list = [
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
    skele: {
        width: '100%'
    },
});

function ListComponent(props) {

    const classes = useStyles();
    const [columns, setColumns] = useState(columns_list)
    const [itemsToDisplay, setItemsToDisplay] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [dispCheckbox, setDispCheckbox] = useState(false)
    const [skeletonVisi, setSkeletonVisi] = useState(true);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    function prepareList() {
        if (!dispCheckbox) {
            let x = props.inputList
            setItemsToDisplay(x)
            // console.log(">>> " + props.inputList)
        }

    }

    function displayCheckbox() {
        if (props.selectVisibility) {
            setDispCheckbox(true)
            let filtered = props.inputList.filter(iv => iv.status === 'Added');
            setItemsToDisplay(filtered)
            setColumns((prev) => [{ id: 'selected', label: 'Selected', minWidth: 170 }, ...prev])
            // console.log(" Lengths "+itemsToDisplay.length + " >>>>> " + props.inputList.length + " >> ")
        }
    }

    useEffect(() => {
        prepareList();
        if (props.inputList.length !== 0) {
            setSkeletonVisi(false)
        }
    }, [props.inputList]);

    useEffect(() => {
        displayCheckbox()
    }, [props.selectVisibility]);

    function checkBoxModify(event) {
        if (event.target.checked)
            props.onChecked(event.target.value)
        else
            props.onUnChecked(event.target.value)
    }




    return (
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
                            <TableRow>
                            {columns.map((column) => {
                                return (<TableCell key={column.id} hidden={!skeletonVisi}>
                                    <Skeleton className={classes.skele} />
                                </TableCell>)
                            })}
                            </TableRow>
                        </TableHead>



                        <TableBody hidden={skeletonVisi}>
                            {itemsToDisplay.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((inv) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={inv.productId} onClick={() => {
                                        if (props.clicker) {
                                            props.onClick(inv)
                                        }
                                    }}>
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
                    rowsPerPageOptions={[5, 7, 12]}
                    component="div"
                    count={itemsToDisplay.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div >
    )


}

export default ListComponent;