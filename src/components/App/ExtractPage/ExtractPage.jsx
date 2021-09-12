import React, {useState} from 'react';
import {Button, TextareaAutosize, TextField, Typography} from "@material-ui/core";
import extractPageStyles from "./extractPageStyles";
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import extraction from "../../../helpers/extraction";
import {Link} from "react-router-dom";

function ExtractPage({ extractWordsHandler }) {
    const [ text, setText ] = useState("");
    const [ threshold, setThreshold ] = useState(0);

    const textAreaChangeHandler = e => {
        setText(e.target.value);
    }

    const thresholdChangeHandler = e => {
        let value = e.target.value;
        if (value < 0)
            value = 0;
        if (value > 9999)
            value = 9999;

        setThreshold(value);
    }

    const extractHandler = () => {
        extractWordsHandler(extraction(text, threshold));
    }

    const classes = extractPageStyles();

    return (
        <>
            <Typography component="h1" variant="h4" color="textPrimary" gutterBottom>
                Copy the text here:
            </Typography>
            <TextareaAutosize
                className={classes.textarea}
                onChange={textAreaChangeHandler}
                minRows={6}
                maxRows={26}
                value={text}
            />
            <div className={classes.buttonDiv}>
                <Link to="/result">
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        disabled={text === ""}
                        onClick={extractHandler}
                        style={{height: '100%'}}
                    >
                        Extract Words <PlayForWorkIcon />
                    </Button>
                </Link>
                <TextField
                    label="Threshold"
                    type="number"
                    variant="outlined"
                    InputProps={{
                        inputProps: {
                            min: 0,
                            max: 9999
                        }
                    }}
                    value={threshold}
                    onChange={thresholdChangeHandler}
                />
            </div>
        </>
    );
}

export default ExtractPage;