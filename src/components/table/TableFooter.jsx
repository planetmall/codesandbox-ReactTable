import React, { useContext } from "react";
import { StoreContext } from "../../services/Store";

// Components
import TablePaginationActions from "./TablePaginationAction";

// Material UI
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";

export default function TableFooterComponent() {
  const [state, dispatch] = useContext(StoreContext);
  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100, state.data.length]}
          colSpan={3}
          count={state.data.length}
          rowsPerPage={state.rowsPerPage}
          page={state.page}
          onChangePage={(e, newPage) =>
            dispatch({ type: "onChangePage", payload: newPage })
          }
          SelectProps={{
            inputProps: { "aria-label": "Rows per page" },
            native: true
          }}
          onChangeRowsPerPage={e =>
            dispatch({
              type: "handleChangeRowsPerPage",
              payload: parseInt(e.currentTarget.value, 10)
            })
          }
          ActionsComponent={TablePaginationActions}
        />
      </TableRow>
    </TableFooter>
  );
}
