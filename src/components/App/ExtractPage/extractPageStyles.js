import { makeStyles } from "@material-ui/core";

const extractPageStyles = makeStyles((theme) => ({
  textarea: {
    width: "100%",
    padding: "18.5px 14px",
    borderRadius: 4,
    border: "1px solid grey",
    borderColor: theme.palette.text.secondary,
    "&:hover": {
      borderColor: theme.palette.text.primary,
    },
    backgroundColor: "transparent",
    font: "inherit",
  },
  buttonDiv: {
    display: "flex",
    flexDirection: "row-reverse",
    marginTop: theme.spacing(1),
    "& > *": {
      marginLeft: theme.spacing(1),
    },
  },
}));

export default extractPageStyles;
