import React from "react"
import { Link } from "gatsby"
import { getSvg } from "../../helpers"

const ListLink = ({ menus }) => {
 return menus && menus.map((menu,key) => {
    return (
      <li className="sub-menu__li col-1-1" key={key*100}>
        <Link to={menu.link}>{menu.name}</Link>
      </li>
    )
  })
}

  const Menu = ({ navOpen }) => {

      const menus = [
        {
          name: "Strategy Provider",
          link: "/",
          subMenu: [
            { name: "Overview", link: "/" },
            { name: "Amber", link: "/" },
            { name: "Apollo", link: "/" },
            { name: "Carbon", link: "/" },
            { name: "Emerald", link: "/" },
            { name: "Pearl", link: "/" },
            { name: "Radiant", link: "/" },
          ],
        },
        {
          name: "Getting Started",
          link: "/",
          subMenu: [
            { name: "How Does It Wordl?", link: "/" },
            { name: "What is Automated Trading?", link: "/" },
            { name: "FAQ", link: "/" },
            { name: "Strategy Providres Guide", link: "/" },
            { name: "Glossary", link: "/" },
          ],
        },
        {
          name: "Simulator",
          link: "/",
          subMenu: null,
        },
        {
          name: "Blog",
          link: "/",
          subMenu: [
            { name: "Home", link: "/" },
            { name: "What is?", link: "/" },
            { name: "Tips", link: "/" },
            { name: "Advantegs", link: "/" },
          ],
        },
        {
          name: "About",
          link: "/",
          subMenu: [
            { name: "About Us", link: "/" },
            { name: "Why DupliTrade", link: "/" },
            { name: "Contact Us", link: "/" },
          ],
        },
      ]

      return (
          <ul className={`main-menu flex fll desktop ${navOpen ? 'nav-is-open' : 'nav-is-close'}`}>
      {menus.map((menu, key) => {
          return (
          <li className={`main-menu__li fll ${menu.subMenu ? 'have-children' : ''}`} key={key}>
              {menu.subMenu ? <nav className="sub-menu"><ul className="sub-menu--inner"><ListLink menus={menu.subMenu} /></ul></nav> : ""}
            <Link to={menu.link}>
              {menu.name}
              {menu.subMenu  ?<span dangerouslySetInnerHTML={{ __html: getSvg('arrow-down') }}></span> : ''}
            </Link>
          </li>
        )
    })}
    </ul>
  )
}
export default Menu
