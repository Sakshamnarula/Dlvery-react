//placeholder

import React from 'react';
import react from 'react';
import bootstrap from 'react-bootstrap'

class AssignExecutive extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            executives: [],
            inventories: [],

        }

        this.fetchExecutives = this.fetchExecutives.bind(this)
        this.fetchInventories = this.fetchInventories.bind(this)

    }

    fetchInventories = () => {

    }

    fetchExecutives = () => {

    }

    componentDidMount() {

    }

    render() {
        return (<div>
            <div className="container">
                <div className="col">
                    <div className="card-col-md">
                        <h3 className="text-center"> Assign Executive</h3>
                        <div className="d-flex">

                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}
export default AssignExecutive;