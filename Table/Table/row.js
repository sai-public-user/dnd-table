import React, { Fragment } from "react";
import { ArrowTooltip } from '../tooltip';
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
        headerVals.map((keyVal, i) => {
          const cellVal = row[keyVal] !== null && row[keyVal].toString().length > 0 ? row[keyVal] : "-";
          return (
            <StyledTableCellBody style={{ width: `${100 / headerVals.length}%` }} title={row[keyVal]} key={i} name={keyVal}>
              <ArrowTooltip title={cellVal}>{cellVal}</ArrowTooltip>
            </StyledTableCellBody>
          );
        })}
    </StyledTableRow>
  );
}

export default Row;
