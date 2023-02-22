import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
    Container: {
        paddingTop: theme.spacing(3),
        textAlign: "center",
    },
    SearchContainer: {
        paddingTop: theme.spacing(3),
        textAlign: "center",
        fontWeight: 800,
        paddingBottom: theme.spacing(6),
    },
    AppContainer: {
        padding: theme.spacing(5),
        textAlign: "center"
    },
    blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3),
        textAlign: "center",
    },
    backbutton: {
        color: "gray",
    },
}));
