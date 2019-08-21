import React from "react";
import Header from "./header";
import Row from "./row";

import { Dialog, DialogContent, TableBody } from "@material-ui/core";
import PropTypes from "prop-types";
import { StyledTable, StyledTableHead } from "./TableStyles";

function DialogTable(props) {
  const { showCmpDialog, closeDialog, compareRows, compareHeaders } = props;
  return (
    <Dialog open={showCmpDialog} onClose={closeDialog} maxWidth="xl">
      {Array.isArray(compareRows) && compareRows.length > 1 ? (
        <DialogContent>
          <StyledTable>
            <StyledTableHead>
              <Header headers={compareHeaders} noCompare />
            </StyledTableHead>

            <TableBody>
              {Array.isArray(compareRows) &&
                compareRows.map((row, i) => (
                  <Row row={row} key={i} headers={compareHeaders} noCompare />
                ))}
            </TableBody>
          </StyledTable>
        </DialogContent>
      ) : (
        <div style={{ padding: "1rem", textAlign: "center" }}>
          Minimum 2 Rows are required to compare please check more than 1 row to
          compare
        </div>
      )}
    </Dialog>
  );
}

DialogTable.propTypes = {
  showCmpDialog: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  compareRows: PropTypes.array.isRequired,
  compareHeaders: PropTypes.array.isRequired
};

export default DialogTable;
