import React from "react";
import {useHistory} from "react-router-dom";
import {Button} from "@material-ui/core";

function LinkButton(props) {
    const { to, children, beforeRedirect } = props;

    const history = useHistory();

    const routeChange = () => {
        if (beforeRedirect)
            beforeRedirect();

        if (to)
            history.push(to);
    }

    return (
        <Button {...props} onClick={routeChange}>
            {children}
        </Button>
    );
}

export default LinkButton;