import React from 'react'
import { useState, useEffect } from 'react';

const Pagination= ({ showPerPage,onPaginationChange })=> {
    // console.log(showPerPage);
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        const value = showPerPage * counter;
        console.log("start" , value - showPerPage);
        console.log("end" , value);
        onPaginationChange(value - showPerPage,value)
    }, [counter])

    return (
        <div className='d-flex justify-content-between'>
            <button className='btn btn-primary' onClick={() => { setCounter(counter - 1); console.log(counter); }}>Pre</button>
            <button className='btn btn-primary' onClick={() => { setCounter(counter + 1); console.log(counter); }}>Next</button>
        </div>
    )
}
export default Pagination