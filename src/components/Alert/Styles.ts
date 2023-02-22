import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    dialog: {
        width: "600px",
        height: "200px",
    },
    title: {
        backgroundColor: theme.palette.error.main,
        color: "#fff",
    },
    message: {
        textAlign: "center",
    },
    closeButton: {
        marginLeft: "auto",
    },
}));