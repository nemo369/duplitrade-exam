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
      <div className="langs relative">
        <button className={`currentlang-btn flag flag-${currentLang}`}></button>
        <div className="absolute langs__dropwdown">
        {langs.map(lang => (
          <button  className={`flex langs__lang`}><div key={lang.code} className={`flag flag-${lang.code}`}></div><small>{lang.name}</small></button>
          ))}
          </div>
      </div>
    </div>
  )
}

export default LangMenu
