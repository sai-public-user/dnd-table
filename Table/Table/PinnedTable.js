import React, { Component } from "react";
import Header from "./header";
import Row from "./row";
import { TableBody } from "@material-ui/core";
import { StyledTable, StyledTableHead } from "./TableStyles";

class PinnedTable extends Component {
  onScroll = () => {
    this.props.onScroll(this.refs.tbody.scrollTop, "pinned");
  };

  render() {
    const {
      pinnedHeaders,
      sortedCol,
      onCellClick,
      compareClicked,
      hasPinnedColumns,
      pinned,
      pinnedRow,
      isPinned,
      rows,
      checked,
      rowCheckBoxChange
    } = this.props;
    return (
      <div
        ref="tbody"
        onScroll={this.onScroll}
        style={{
          width: `${pinnedHeaders.length * 18 + pinnedHeaders.length}%`,
          overflowY: "auto"
        }}
      >
        <StyledTable>
          <StyledTableHead>
            <Header
              sortedCol={sortedCol}
              onCellClick={onCellClick}
              headers={pinnedHeaders}
              compare={compareClicked}
              hasPinnedColumns={hasPinnedColumns}
              pinned={pinned}
              pinnedRow={pinnedRow}
              isPinned={isPinned}
            />
          </StyledTableHead>

          <TableBody>
            {Array.isArray(rows) &&
              rows.map((row, i) => (
                <Row
                  checked={checked}
                  pinnedRow
                  pinned={pinned}
                  checkBoxChange={rowCheckBoxChange}
                  row={row}
                  key={i}
                  headers={pinnedHeaders}
                />
              ))}
          </TableBody>
        </StyledTable>
      </div>
    );
  }
}

export default PinnedTable;
