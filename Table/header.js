import React, { Fragment } from "react";
import PropTypes from "prop-types";

import {
  StyledCheckbox,
  StyledTableRow,
  MyTablesortLabel,
  MyCompareCell,
  FirstHeadCell,
  StyledTableCellHead
} from "./TableStyles";

const windowRestorSvg = compare => (
  <svg viewBox="0 0 512 512" width="20" fill="white">
    <path d="M464 0H144c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM32 144c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16v80H32v-80zm352 320c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V256h352v208zm96-96c0 8.8-7.2 16-16 16h-48V144c0-26.5-21.5-48-48-48H128V48c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16v320z" />
  </svg>
);

function Header(props) {
  const {
    pinned = [],
    headers = [],
    isPinned,
    hasPinnedColumns,
    pinnedRow,
    compare,
    sortedCol={},
    onCellClick,
    noCompare,
    checkBoxChange,
    checkBox
  } = props;

  return (
    <StyledTableRow>
      {(Array.isArray(pinned) && pinned.length > 0 && pinnedRow) ||
      (!pinnedRow &&
        Array.isArray(pinned) &&
        pinned.length === 0 &&
        !noCompare) ? (
        <FirstHeadCell>
          {checkBoxChange && checkBox !== undefined ? (
            <StyledCheckbox
              name="allrows"
              onChange={checkBoxChange}
              value={checkBox}
            />
          ) : null}
          <MyCompareCell onClick={compare}>
            {windowRestorSvg(compare)}
          </MyCompareCell>
        </FirstHeadCell>
      ) : null}

      {headers.map(col => {
        const { name = "", value = "" } = col;
        return (
          <StyledTableCellHead
            key={value}
            name={name}
            onClick={e => (onCellClick ? onCellClick(value, e) : null)}
          >
            {hasPinnedColumns && (
              <span
                className={`${pinned.includes(value) ? "text-info" : ""}`}
                name={value}
                onClick={isPinned}
              >
                <i
                  className="fa fa-thumb-tack"
                  name="pin_value"
                  aria-hidden="true"
                />
              </span>
            )}
            <MyTablesortLabel
              direction={sortedCol[value]}
              active={sortedCol[value]}
            >
              {name}
            </MyTablesortLabel>
          </StyledTableCellHead>
        );
      })}
    </StyledTableRow>
  );
}

Header.propTypes = {
  sortedCol: PropTypes.object,
  onCellClick: PropTypes.func,
  headers: PropTypes.array.isRequired,
  compare: PropTypes.func,
  hasPinnedColumns: PropTypes.bool,
  pinned: PropTypes.array,
  isPinned: PropTypes.bool,
  checkBoxChange: PropTypes.func,
  checkBox: PropTypes.bool
};

export default Header;
