import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiOutlineForm} from 'react-icons/ai'
// import {BsArrowCounterclockwise} from 'react-icons/bs'
import {BsArrowCounterclockwise} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="nav-header">
    <div className="nav-content">
      <Link to="/">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button className="hamburger-icon-button" type="button">
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-button"
              type="button"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>
            <ul className="nav-links-list">
              <li className="nav-link-item">
                <Link
                  className="nav-link"
                  to="/counterapp"
                  onClick={() => close()}
                >
                  <BsArrowCounterclockwise size="36" />
                  <p className="nav-link-content">Counter App</p>
                </Link>
              </li>
              <li className="nav-link-item">
                <Link
                  className="nav-link"
                  to="/formapp"
                  onClick={() => close()}
                >
                  <AiOutlineForm size="32" />
                  <p className="nav-link-content">Form Application</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
