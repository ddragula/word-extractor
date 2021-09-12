import React, {useState} from 'react';
import {Button, TextareaAutosize, Typography} from "@material-ui/core";
import extractPageStyles from "./extractPageStyles";
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import extraction from "../../../helpers/extraction";

function ExtractPage() {
    const [ text, setText ] = useState("");

    const textAreaChangeHandler = e => {
        setText(e.target.value);
    }

    const extractHandler = () => {
        console.log(extraction(text));
    }

    const classes = extractPageStyles();

    return (
        <>
            <Typography component="h1" variant="h4" color="textPrimary" gutterBottom>
                Copy the text here:
            </Typography>
            <TextareaAutosize className={classes.textarea} onChange={textAreaChangeHandler} minRows={6} maxRows={26} />
            <div className={classes.buttonDiv}>
                <Button variant="contained" color="primary" size="large" disabled={text === ""} onClick={extractHandler}>
                    Extract Words <PlayForWorkIcon />
                </Button>
            </div>
        </>
    );
}

export default ExtractPage;