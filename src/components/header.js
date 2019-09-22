import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/logo"
import Menu from "./header/menu"
import LangMenu from "./header/lang_menu"
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true,
      navOpen:false
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }
  handleScroll = () => {
    const visible = window.pageYOffset < 5
    this.setState({
      visible,
    })
  }

  toglleNav= () =>{
    this.setState({navOpen : !this.state.navOpen})
  }
  render() {
    const { siteTitle } = this.props
    return (
      <div className="header__placeholder">
        <div
          className={`header__wrapper col-1-1 ${
            !this.state.visible ? "header-shrink" : "header-big"
          } `}
        >
          <header className={`header col-1-1`}>
            <div className="header__logo logo">
              <Link to="/">
                <Logo siteTitle={siteTitle} />
              </Link>
            </div>
            <div className="header__navs col-1-1">
              <Menu navOpen={this.state.navOpen}/>
              <button className="fll hamburger mobile" onClick={this.toglleNav}>
                <span className="hamburger__span hamburger__span--1">|</span>
                <span className="hamburger__span hamburger__span--2">|</span>
                <span className="hamburger__span hamburger__span--3">|</span>
              </button>
              <LangMenu currentLang="en" />
              <div className="flc" />
            </div>
          </header>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
