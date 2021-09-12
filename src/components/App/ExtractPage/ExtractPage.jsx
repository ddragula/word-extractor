import React, {useState} from 'react';
import {Button, TextareaAutosize, Typography} from "@material-ui/core";
import extractPageStyles from "./extractPageStyles";
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';

function ExtractPage() {
    const [ submitButtonDisabled, setSubmitButtonDisabled ] = useState(true);

    const textAreaChangeHandler = e => {
        if (e.target.value) {
            if (submitButtonDisabled === true)
            {
                setSubmitButtonDisabled(false);
            }
        } else {
            if (submitButtonDisabled === false)
            {
                setSubmitButtonDisabled(true);
            }
        }
    }

    const classes = extractPageStyles();

    return (
        <>
            <Typography component="h1" variant="h4" color="textPrimary" gutterBottom>
                Copy the text here:
            </Typography>
            <TextareaAutosize className={classes.textarea} onChange={textAreaChangeHandler} minRows={6} maxRows={26} />
            <div className={classes.buttonDiv}>
                <Button variant="contained" color="primary" size="large" disabled={submitButtonDisabled}>
                    Extract Words <PlayForWorkIcon />
                </Button>
            </div>
        </>
    );
}

export default ExtractPage;