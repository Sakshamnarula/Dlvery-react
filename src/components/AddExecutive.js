import React, { useEffect, useState } from 'react';
import InventoryService from '../services/InventoryService';
export default AddExecutive;

function AddExecutive() {

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
        <div>
            <div className="container">
                <div className="col">
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
                </div>
            </div>
        </div>
    )

}