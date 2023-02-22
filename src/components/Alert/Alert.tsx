import React, { FC } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import { useStyles } from "./Styles";

interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert: FC<AlertProps> = ({ message, onClose }) => {
  const classes = useStyles();

  return (
    <Dialog open={true} onClose={onClose} classes={{ paper: classes.dialog }}>
      <DialogTitle className={classes.title}>Alert</DialogTitle>
      <DialogContent dividers>
        <p className={classes.message}>{message}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} className={classes.closeButton}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Alert;
