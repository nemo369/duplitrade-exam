import React from "react"

const LangMenu = ({ currentLang }) => {
  const langs = [
    {
      code: "us",
      name: "English",
    },
    {
      code: "mt",
      name: "Espnaol",
    },
    {
      code: "es",
      name: "Itlaion",
    },
    {
      code: "fr",
      name: "france",
    },
    {
      code: "ch",
      name: "name",
    },
  ]
  return (
    <div className="lang-menu flex flr">
      <button className="btn lang-menu__btn lang-menu__btn--emtpy">
        Login
      </button>
      <span>|</span>
      <button className="btn lang-menu__btn lang-menu__btn--full">
        Sign Up
      </button>
      <div className="langs">
        <button className={`currentlang-btn flag flag-${currentLang}`}></button>
        {langs.map(lang => (
          <button key={lang.code}className={`flag flag-${lang.code}`}>{lang.name}</button>
        ))}
      </div>
    </div>
  )
}

export default LangMenu
