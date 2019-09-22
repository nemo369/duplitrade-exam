import React from "react"
import { getSvg } from "../../helpers"

const TableHeader = ({ columns, reSort, sortByBiggest }) => {
  const keys = Object.keys(columns)
  return (
    <header className="table__header">
      {keys &&
        keys.map((key, index) => {
          return (
            <div
              className={`table__header--cell header-cell--${key}`}
              onClick={() => reSort(key, columns[key])}
              key={index}
            >
              {key}
              {key === "followers" ? (
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
