import React from "react"
import { getSvg } from "../../helpers"

const TableHeader = ({ columns, reSort, sortByBiggest }) => {
  return (
    <header className="table__header">
      {columns &&
        columns.map((key, index) => {
          return (
            <div
              className={`table__header--cell header-cell--${key}`}
              onClick={() => reSort(key)}
              key={index}
            >
              {key}
              {key === "Followers" ? (
                <span
                  className={sortByBiggest ? "down" : "up"}
                  dangerouslySetInnerHTML={{ __html: getSvg("arrow-down") }}
                ></span>
              ) : (
                ""
              )}
            </div>
          )
        })}
    </header>
  )
}

export default TableHeader
