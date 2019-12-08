import React, { useContext } from "react";
import { StoreContext } from "../../services/Store";
import _ from "lodash";

// Material UI
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";

export default function TableBodyComponent() {
  const [state, dispatch] = useContext(StoreContext);

  const sorted = _.orderBy(state.data, [state.path], [state.order]);
  const rows = sorted.slice(
    state.page * state.rowsPerPage,
    state.page * state.rowsPerPage + state.rowsPerPage
  );

  return (
    <TableBody>
      {rows.map(r => (
        <TableRow key={r.id}>
          <TableCell>{r.userId}</TableCell>
          <TableCell>{r.id}</TableCell>
          <TableCell>{r.title}</TableCell>
          <TableCell>
            <Checkbox
              checked={r.completed}
              onChange={() => dispatch({ type: "updateCompleted", payload: r })}
              color="primary"
              inputProps={{
                "aria-label": "secondary checkbox"
              }}
            />
          </TableCell>
        </TableRow>
      ))}

      {/* {emptyRows > 0 && (
        <TableRow style={{ height: 48 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )} */}
    </TableBody>
  );
}
