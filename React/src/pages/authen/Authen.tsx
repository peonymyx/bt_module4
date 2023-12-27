import { useTranslation } from 'react-i18next';
import { Outlet, useNavigate } from 'react-router-dom'
import { useRef } from 'react'
export default function Authen() {
    const containerRef = useRef<any>();
    const navigate = useNavigate()
    const { t, i18n} = useTranslation();
    return (
        <div ref={containerRef} className="container" id="container">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="navbar-collapse-right">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Language
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className="dropdown-item" onClick={()=>{
                    i18n.changeLanguage("vi")
                    localStorage.setItem("locales", "vi")
                  }}>
                    VN
                  </div>
                  <div className="dropdown-item" onClick={()=>{
                    i18n.changeLanguage("en")
                    localStorage.setItem("locales", "en")
                  }}>
                    EN
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="btn btn-link" style={{ color: "snow" }} onClick={()=>{navigate("login")}}>
                  {t('login')}
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-success"onClick={()=>{navigate("register")}}>
                  {t('register')}
                </a>
              </li>
            </ul>
          </div>
        </nav>
            <Outlet></Outlet>
        </div>
    )
}
