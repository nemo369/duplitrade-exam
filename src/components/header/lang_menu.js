import React from "react"

const LangMenu = ({ currentLang }) => {
  return (
    <div className="lang-menu flex flr">
      <button className="btn lang-menu__btn lang-menu__btn--emtpy">
        Login
      </button>
      <span>|</span>
      <button className="btn lang-menu__btn lang-menu__btn--full">
        Sign Up
      </button>
      <div className="langs"></div>
    </div>
  )
}

export default LangMenu
