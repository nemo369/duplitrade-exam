import React from "react"
import { Link } from "gatsby"

const FooterMenu = ({ menus }) => {
  return (
    <nav className="footer__navs flex">
      {menus &&
        menus.map((menu, key) => {
          return (
            <div key={key} className={`footer__nav footer__navs--${key}`}>
               {menu.link ? <Link to={menu.link}> {menu.name} </Link> : menu.name}
               {menu.subs ? <ListLink menus={menu.subs} /> : ""}
            </div>
          )
        })}
    </nav>
  )
}
export default FooterMenu

const ListLink = ({ menus }) => {
  return (
    menus &&
    menus.map((menu, key) => {
      return (
        <div className="footer__nav--subs col-1-1" key={key * 100}>
          <Link to={menu.link}>{menu.name}</Link>
        </div>
      )
    })
  )
}
