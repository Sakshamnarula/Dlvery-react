import React, { useState, useEffect } from 'react';
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
}))



const LoginPage = () => {

    const classes = useStyles();

    function performAuth(values){
        InventoryService.authAndGenToken(values)
    }

    const validate = values => {
        const errors = {};
        console.log('Values || ' + values.username + " >>> " + values.password)
        if (!values.username) {
            errors.username = 'Required';
        }
        else if (!/^[a-zA-Z]*$/i.test(values.username)) {
            errors.username = 'no numeric values please :)';
        }
        else if (values.username.length > 15) {
            errors.username = 'Must be 15 characters or less';
        }

        if (!values.password) {
            errors.password = 'Required';
        }
        // else if (!/^[0-9]*$/i.test(values.password)) {
        //     errors.password = 'numbers only please :)';
        // }
        // else if (values.password.length > 10 || values.password.length < 10) {
        //     errors.password = 'mobile numbers are 10 digits buddhu :) ';
        // }
        // console.log(errors)
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            console.log(values + ' <<< YEH VALUE AARI HAI KYA')
            // addExecutive(values)
            performAuth(values)
        },
    })



    return (
        <div className={classes.root}>
            <Paper elevation={4} className={classes.paper} variant="outlined">
                <h3 className="text-center"> Sign In Here</h3>
                {/* <form className={classes.form} autoComplete="off" >
                    <TextField id="standard-basic" label="Executive Id" value={executive.exId} disabled />
                    <TextField id="standard-basic" label="Executive Name" value={executive.username} onChange={changeExNameHandler} />
                    <TextField id="standard-basic" label="Executive Contact" value={executive.password} onChange={changeExContactHandler} />
                    <Button variant="contained" onClick={addExecutive} >Add Executive</Button>
                </form> */}
                <form className={classes.form} autoComplete='off' onSubmit={formik.handleSubmit}>
                    <TextField id="username"
                        name="username"
                        type="text"
                        onKeyPress={() => { if (!formik.touched.username) { console.log('ONE TIME PLIS'); formik.setFieldTouched('username', true) } }}
                        onChange={(e) => { formik.handleChange(e); }}
                        value={formik.values.username} label="Username" error={formik.touched.username && Boolean(formik.errors.username)} helperText={formik.touched.username && formik.errors.username} />
                    <TextField id="password"
                        name="password"
                        type="password"
                        onKeyPress={() => { if (!formik.touched.password) { console.log('ONE TIME PLIS'); formik.setFieldTouched('password', true) } }}
                        onChange={(e) => { formik.handleChange(e); }}
                        value={formik.values.password} label="Password" error={formik.touched.password && Boolean(formik.errors.password)} helperText={formik.touched.password && formik.errors.password} />
                    <Button variant="contained" type="submit">Authorize</Button>
                    {/* {console.log("touched >> " + Boolean(formik.errors.length) + " >> " + !Boolean(formik.errors.length))} */}
                </form>
            </Paper>
        </div>
    )
}

export default LoginPage;

