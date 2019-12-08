import React, { useContext } from "react";
import { StoreContext } from "../../services/Store";

// components
import TableHeaderComponent from "./TableHeader";
import TableBodyComponent from "./TableBody";
import TableFooterComponent from "./TableFooter";

// Material UI
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    marginTop: theme.spacing(3),
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 650
  },
  progress: {
    position: "absolute",
    top: "50%",
    left: "50%"
  }
}));

export default function MainTable() {
  const [state] = useContext(StoreContext);
  const classes = useStyles();

  return state.data.length ? (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHeaderComponent />
          <TableBodyComponent />
          <TableFooterComponent />
        </Table>
      </Paper>
    </div>
  ) : (
    <CircularProgress className={classes.progress} />
  );
}
