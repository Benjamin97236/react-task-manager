import React from 'react'

export const FormControls = ({ formVisibilityHandler, formVisibility, setAutoFilter, autoFilter }) => {
    //This will return buttons to control the form
    const setFormVisibility = () => {
        formVisibilityHandler(!formVisibility);
    }

    //Function for changing the autofilter state
    const changeAutoFilter = () => {
        //Setting the filter to the opposite of previous value
        setAutoFilter(!autoFilter);
    }
    return (
        <div className="form-controls">
            <button onClick={setFormVisibility}>{formVisibility ? 'Close tab' : 'Create task'}</button>
            <div style={{'display' : 'flex', 'alignItems' : 'center'}}>
                <input type="checkbox" className="regular-checkbox" checked={autoFilter} onChange={changeAutoFilter} />
                <p style={{'marginLeft' : '10px'}}>Auto-sort items</p>
            </div>
        </div>
    )
}

export default FormControls;
