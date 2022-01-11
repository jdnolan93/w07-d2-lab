import React, {useState} from "react";

const FeedbackForm = () => {

    const [comment, setComment] = useState("");

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const updatedComments = [...comment, event.target.value];
        setComment(updatedComments); //this is wrong
    };


    return(
        <>
        {comment}
        <form onSubmit = {handleFormSubmit}>
            <input 
            type = "text"
            placeholder = "Enter comment"
            value = {comment}
            onChange = {handleCommentChange}
            />
            <input
            type = "submit"
            value = "Post"
            />
        </form>
        </>
    );
};

export default FeedbackForm;