import React, { useEffect, useState } from 'react';
import InventoryService from '../services/InventoryService';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    paper: {
        margin: '2ch',
        display: 'block',
        height: '80%',
        width: '30%',
        // display: 'flex',
        // flexWrap: 'wrap',
        //
    },
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    form: {
        '& > *': {
            display: 'grid',
            margin: theme.spacing(3),
            width: 'ch',
            alignSelf: 'center',
        },
    },
}));


function AddExecutive() {

    const classes = useStyles();
    const [executive, setExecutive] = useState({
        exName: "",
        exId: "",
        exContact: ""
    })

    function addExecutive(e) {
        e.preventDefault()
        let ex = executive;
        // console.log("MethodaddExecutive" + this.state)
        InventoryService.addExecutive(ex)
        // this.componentDidMount()
        setExecutive((prevState) => {
            return ({
                ...prevState,
                exName: "",
                exContact: ""
            })
        })
        // this.setState({
        //     exName: "",
        //     exContact: ""
        // });
        fetchExecutiveCount()
    }

    function changeExNameHandler(event) {
        setExecutive((prevState) => {
            return ({
                ...prevState,
                exName: event.target.value
            })
        })
        // this.setState({ exName: event.target.value })
    }
    function changeExContactHandler(event) {
        setExecutive((prevState) => {
            return ({
                ...prevState,
                exContact: event.target.value
            })
        })
        // this.setState({ exContact: event.target.value })
    }

    function fetchExecutiveCount() {
        InventoryService.getAllExecutive().then((Response) => {
            let idToSet = Response.data.length + 1
            console.log("FetchExecutiveCount" + idToSet);
            setExecutive((prevState) => {
                return ({
                    ...prevState,
                    exId: idToSet
                })
            })   // console.log( " >>>> " + new Date());
            // this.setState({ executive: Response.data })   // console.log( " >>>> " + new Date());
        })
    }

    useEffect(() => {
        fetchExecutiveCount()
    }, [])


    return (
        <div className={classes.root}>
            <Paper elevation={4} className={classes.paper} variant="outlined">
                <h3 className="text-center"> Add Inventory</h3>
                <form className={classes.form} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Executive Id" value={executive.exId} disabled />
                    <TextField id="standard-basic" label="Executive Name" value={executive.exName} onChange={changeExNameHandler} />
                    <TextField id="standard-basic" label="Executive Contact" value={executive.exContact} onChange={changeExContactHandler} />
                    <Button variant="contained" onClick={addExecutive}>Add Executive</Button>
                </form>
                {/* <div className="col">
                        <div className="card-col-md">
                            <h3 className="text-center"> Add Executive</h3>
                            <div className="card-body">
                                <form>
                                    <div className="col-md">
                                        <div className="form-group row">
                                            Executive Id
                                            <input placeholder="Executive Id" name="exId" className="form-control" value={executive.exId} readOnly={true}></input>
                                        </div>
                                        <div className="form-group row">
                                            <label>
                                                Executive Name
                                            </label>
                                            <input placeholder="Executive Name" name="exName" className="form-control" value={executive.exName} onChange={changeExNameHandler}></input>
                                        </div>
                                        <div className="form-group row">
                                            <label>
                                                Executive Contact
                                            </label>
                                            <input placeholder="Executive Contact" name="exContact" className="form-control" value={executive.exContact} onChange={changeExContactHandler}></input>
                                        </div>
                                    </div>
                                    <button className="btn btn-success" onClick={addExecutive}>Add Executive</button>
                                </form>
                            </div>
                        </div>
                    </div> */}
            </Paper>
        </div>
    )

}

export default AddExecutive;
