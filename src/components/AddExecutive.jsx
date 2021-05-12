import React, { useEffect, useState } from 'react';
import InventoryService from '../services/InventoryService';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { useFormik } from 'formik';


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



const AddExecutive = () => {

    // const [formik, setTest] = useState()

    const classes = useStyles();
    // const [executive, setExecutive] = useState({
    //     exName: "",
    //     exId: "",
    //     exContact: ""
    // })

    function addExecutive(e) {
        // e.preventDefault()
        let ex = e;
        console.log("MethodaddExecutive" + ex.exId + " " + ex.exName + " " + ex.exContact)
        InventoryService.addExecutive(ex)
        // this.componentDidMount()
        // setExecutive((prevState) => {
        //     return ({
        //         ...prevState,
        //         exName: "",
        //         exContact: ""
        //     })
        // })
        // this.setState({
        //     exName: "",
        //     exContact: ""
        // });
        fetchExecutiveCount()
    }

    // function changeExNameHandler(event) {
    //     setExecutive((prevState) => {
    //         return ({
    //             ...prevState,
    //             exName: event.target.value
    //         })
    //     })
    //     // this.setState({ exName: event.target.value })
    // }
    // function changeExContactHandler(event) {
    //     setExecutive((prevState) => {
    //         return ({
    //             ...prevState,
    //             exContact: event.target.value
    //         })
    //     })
    //     // this.setState({ exContact: event.target.value })
    // }

    function fetchExecutiveCount() {
        InventoryService.getAllExecutive().then((Response) => {
            let idToSet = Response.data.length + 1
            console.log("FetchExecutiveCount" + idToSet);
            formik.setFieldValue('exId', idToSet);
            // setExecutive((prevState) => {
            //     return ({
            //         ...prevState,
            //         exId: idToSet
            //     })
            // })   // console.log( " >>>> " + new Date());
            // this.setState({ executive: Response.data })   // console.log( " >>>> " + new Date());
        })
    }

    useEffect(() => {
        fetchExecutiveCount()
    }, [])

    const validate = values => {
        const errors = {};
        console.log('Values || ' + values.exName + " >>> " + values.exContact)
        if (!values.exName) {
            errors.exName = 'Required';
        } 
        else if (!/^[a-zA-Z]*$/i.test(values.exName)) {
            errors.exName = 'no numeric values please :)';
        }
        else if (values.exName.length > 15) {
            errors.exName = 'Must be 15 characters or less';
        }

        if (!values.exContact) {
            errors.exContact = 'Required';
        }
        else if (!/^[0-9]*$/i.test(values.exContact)) {
            errors.exContact = 'numbers only please :)';
        }
        else if (values.exContact.length > 10 || values.exContact.length < 10) {
            errors.exContact = 'mobile numbers are 10 digits buddhu :) ';
        }
        // console.log(errors)
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            exId: '',
            exName: '',
            exContact: ''
        },
        validate,
        onSubmit: values => {
            console.log(values + ' <<< YEH VALUE AARI HAI KYA')
            addExecutive(values)
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
                <form className={classes.form} autoComplete='off' onSubmit={formik.handleSubmit}>
                    <TextField id="exId"
                        name="exId"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.exId} label="Executive Id" disabled />
                    <TextField id="exName"
                        name="exName"
                        type="text"
                        onKeyPress={() => { if (!formik.touched.exName) { console.log('ONE TIME PLIS'); formik.setFieldTouched('exName', true) } }}
                        onChange={(e) => { formik.handleChange(e); }}
                        value={formik.values.exName} label="Executive Name" error={formik.touched.exName && Boolean(formik.errors.exName)} helperText={formik.touched.exName && formik.errors.exName} />
                    <TextField id="exContact"
                        name="exContact"
                        type="text"
                        onKeyPress={() => { if (!formik.touched.exContact) { console.log('ONE TIME PLIS'); formik.setFieldTouched('exContact', true) } }}
                        onChange={(e) => { formik.handleChange(e); }}
                        value={formik.values.exContact} label="Executive Contact" error={formik.touched.exContact && Boolean(formik.errors.exContact)} helperText={formik.touched.exContact && formik.errors.exContact} />
                    <Button variant="contained" type="submit">Add Executive</Button>
                    {/* {console.log("touched >> " + Boolean(formik.errors.length) + " >> " + !Boolean(formik.errors.length))} */}
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
