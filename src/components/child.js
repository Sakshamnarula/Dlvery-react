import React, { useState, useEffect } from 'react';

function Child(props) {



    function handleChange(event) {
        // Here, we invoke the callback with the new value
        props.onChange(event.target.value);
    }
  
    return(
        <div>
            xyzsadhjbwqhjebwqhbehjqwe
            <input onChange={handleChange} />
        </div>
    )
}

export default Child