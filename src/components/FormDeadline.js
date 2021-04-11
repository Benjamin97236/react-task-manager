import React, {useEffect} from 'react'

export const FormDeadline = ({ uploadPost, deadlineText, setDeadlineText, clearForm }) => {

    //A function for setting the property 'postDetails's value
    //This will run whenever the reminder gets changed
    const setPostDetails = (e) => {
        //Setting the deadline state value
        setDeadlineText(
            e.target.value,
        );
    }

    return (
        <div className="form-container">
            <div>
                <p>Duration:</p>
                <input type="text" className="regular-input" value={deadlineText} onChange={setPostDetails} placeholder="Enter duration" />
            </div>
            <div className="form-subcontainer">
                <button onClick={uploadPost}>Upload</button>
                <button onClick={clearForm}>Clear form</button>
            </div>
        </div>
    )
}

export default FormDeadline;