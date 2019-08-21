import React, { Fragment } from "react";
//import Cell from "./cell";
import {
  StyledTableRow,
  StyledTableCellBody,
  StyledCheckbox
} from "./TableStyles";

function Row(props) {
  const {
    row = {},
    headers = null,
    pinned = [],
    checked = [],
    checkBoxChange,
    pinnedRow,
    noCompare
  } = props;

  const headerVals =
    (Array.isArray(headers) && headers.map(({ value = "" }) => value)) || [];

  const { classes = {} } = props || {};
  return (
    <StyledTableRow>
      {/* {(Array.isArray(pinned) && pinned.length > 0 && pinnedRow) ||
      (!pinnedRow &&
        Array.isArray(pinned) &&
        pinned.length === 0 &&
        !noCompare) ? (
        <StyledTableCellBody>
          <StyledCheckbox
            checked={checked.includes(row.id)}
            onChange={checkBoxChange}
            name={`${row.id}`}
          />
        </StyledTableCellBody>
      ) : null} */}
      {row &&
        row !== null &&
        Array.isArray(headerVals) &&
        headerVals.map((keyVal, i) => (
          <StyledTableCellBody title={row[keyVal]} key={i} name={keyVal}>
            {row[keyVal] !== null &&
            (row[keyVal].length > 0 || typeof row[keyVal] === "number")
              ? row[keyVal]
              : "-"}
          </StyledTableCellBody>
        ))}
    </StyledTableRow>
  );
}

export default Row;
