import React, { useEffect, useState } from 'react';
import InventoryService from '../services/InventoryService';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Formik, { useFormik } from 'formik';


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



const AddExecutive = () =>  {

    // const [formik, setTest] = useState()

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

    const validate = values => {
        const errors = {};
        if (!values.exName) {
            errors.exName = 'Required';
        } else if (values.exName.length > 15) {
            errors.exName = 'Must be 15 characters or less';
        }

        if (!values.exContact) {
            errors.exContact = 'Required';
        }
        else if (values.exContact.length > 10) {
            errors.exContact = 'Must be 10 characters or less';
        }
        // console.log(errors)
        // setTest(formik.touched)
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            exId: '101',
            exName: '',
            exContact: '',
            // email: '',
        },
        validate,
        onSubmit: values => {
            console.log(values + ' <<< VAlues')
        },
    })

    return (
        <div className={classes.root}>
            <Paper elevation={4} className={classes.paper} variant="outlined">
                <h3 className="text-center"> Add Inventory</h3>
                {/* <form className={classes.form} autoComplete="off" >
                    <TextField id="standard-basic" label="Executive Id" value={executive.exId} disabled />
                    <TextField id="standard-basic" label="Executive Name" value={executive.exName} onChange={changeExNameHandler} />
                    <TextField id="standard-basic" label="Executive Contact" value={executive.exContact} onChange={changeExContactHandler} />
                    <Button variant="contained" onClick={addExecutive} >Add Executive</Button>
                </form> */}

                <form className={classes.form} onSubmit={formik.handleSubmit}>
                    <TextField id="exId"
                        name="exId"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.exId} label="Executive Id" disabled />

                    <TextField id="exName"
                        name="exName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.exName} label="Executive Name" error={formik.touched.exName && Boolean(formik.errors.exName)} helperText={formik.touched.exName && formik.errors.exName} />
                    <TextField id="exContact"
                        name="exContact"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.exContact} label="Executive Contact" error={formik.touched.exContact && Boolean(formik.errors.exContact)} helperText={formik.touched.exContact && formik.errors.exContact} />
                    <Button variant="contained" type="submit">Add Executive</Button>
                    {console.log("touched >> " + formik.touched.exContact )} 
                </form>
                {/* error={formik.touched.exContact && Boolean(formik.errors.exContact)} helperText={formik.touched.exContact && formik.errors.exContact} */}
                {/* <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="email">Email Address</label>
                    <TextField
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    <button type="submit">Submit</button>
                    {console.log("touch" + formik.touched.email) }
                </form> */}



            </Paper>
        </div>
    )

}

export default AddExecutive;
