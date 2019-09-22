import React from "react"

const Table = ({ rows, handleDuplicate }) => {
  return (
    <div className="table__body">
      {rows &&
        rows.map(row => (
          <div key={row.Strategy} className="table__row">
            <Row row={row} />
            <div className="cell">
            <button
              onClick={() => handleDuplicate(row)}
              className="table__btn"
            >
              Duplicate
            </button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Table

const Row = ({ row }) => {
  return Object.keys(row).map(key => {
    return (
      <div
      key={key}
        className={`cell cell--${key}
         ${
           key === "Net P/L" && parseInt(row[key]) > 0
             ? "cell--positive"
             : ""
         } 
         ${key === "Net P/L" && parseInt(row[key]) < 0 ? "cell--negtive" : ""}`}
      >
        {row[key]}
      </div>
    )
  })
}
