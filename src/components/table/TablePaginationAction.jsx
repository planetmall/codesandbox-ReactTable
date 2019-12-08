import React, { useContext } from "react";
import { StoreContext } from "../../services/Store";

// Material UI
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5)
  }
}));

export default function TablePaginationActions({ onChangePage }) {
  const [state, dispatch] = useContext(StoreContext);

  const classes = useStyles1();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <IconButton
        onClick={() => dispatch({ type: "handleFirstPageButtonClick" })}
        disabled={state.page === 0}
        aria-label="First Page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={() => dispatch({ type: "handleBackButtonClick" })}
        disabled={state.page === 0}
        aria-label="Previous Page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={() => dispatch({ type: "handleNextButtonClick" })}
        disabled={
          state.page >= Math.ceil(state.data.length / state.rowsPerPage) - 1
        }
        aria-label="Next Page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={() => dispatch({ type: "handleLastPageButtonClick" })}
        disabled={
          state.page >= Math.ceil(state.data.length / state.rowsPerPage) - 1
        }
        aria-label="Last Page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}
