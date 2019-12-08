import React, { useContext } from "react";
import { StoreContext } from "../../services/Store";

// Material UI
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

// Material Icons
import TableSortLabel from "@material-ui/core/TableSortLabel";

export default function TableHeaderComponent() {
  const [state, dispatch] = useContext(StoreContext);

  return (
    <TableHead>
      <TableRow>
        {state.headers.map((h, i) => (
          <TableCell
            key={i}
            onClick={() => dispatch({ type: "sortHeader", payload: h })}
          >
            <TableSortLabel active={state.path === h} direction={state.order}>
              {h.toUpperCase()}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
