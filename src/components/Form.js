import React, { useState } from 'react'
//Importing form details
import FormDescription from './FormDescription';
import FormDeadline from './FormDeadline';

export const Form = ({ formVisibility, posts, postHandler }) => {

    const [titleText, setTitleText] = useState("");
    const [descriptionText, setDescriptionText] = useState("");
    const [deadlineText, setDeadlineText] = useState("");

    const uploadPost = (e) => {
        //Preventing form from submitting
        e.preventDefault();
        //Doing very simple form validation

        //Setting the key
        var key = Math.random() * 1000;

        //Setting the postHandler state values
        postHandler([
            ...posts,
            {
                deadline: deadlineText,
                title: titleText,
                description: descriptionText,
                completed: false,
                id: key,
            }
        ]);

        clearForm(e);
    }

    function clearForm(e) {
        e.preventDefault();
        //Clearing all the states
        //This will also clear all the form input values
        setDeadlineText(
            "",
        );

        setDescriptionText(
            "",
        );

        setTitleText(
            "",
        )
    }

    return (
        <form className={!formVisibility ? 'form invisible' : 'form'}>
            <FormDescription
            titleText={titleText} setTitleText={setTitleText}
            descriptionText={descriptionText} setDescriptionText={setDescriptionText} />

            <FormDeadline 
            uploadPost={uploadPost}
            deadlineText={deadlineText}
            setDeadlineText={setDeadlineText}
            clearForm={clearForm} />
        </form>
    )
}

export default Form;
