import React from 'react'

export const FormDescription = ({ titleText, setTitleText, descriptionText, setDescriptionText }) => {

    const setPostTitle = (e) => {
        e.preventDefault();
        setTitleText(
            e.target.value,
        )
    }

    const setPostDescription = (e) => {
        e.preventDefault();
        setDescriptionText(
            e.target.value,
        )
    }

    return (
        <div className="form-container" style={{flex: 2}}>
            <p>Title</p>
            <input onChange={setPostTitle} type="text" className="regular-input" placeholder="Post title" value={titleText} />
            <p>Description</p>
            <textarea onChange={setPostDescription} className="regular-textarea"  placeholder="Post description" value={descriptionText}></textarea>
        </div>
    )
}

export default FormDescription;