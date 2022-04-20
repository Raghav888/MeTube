import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

import "./Navbar.css";
import { useDetectOutsideClick } from "../../../utils/useDetectOutSideClick";
export function Navbar() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  return (
    <nav className="mantra-nav head-nav nav-main">
      <div className="mantra-nav-title">
        <Link className="mantra-title" to="/">
          <img
            src="https://i.ibb.co/crsfT6M/Metube.png"
            className="logo-brand"
            alt="metube"
          />
        </Link>
      </div>
      <div className="mantra-nav-search">
        <input
          className="mantra-search-box mantra-textbox-classic mantra-highlight-box search-box "
          placeholder="  Search"
          type="text "
        />
        <button className="mantra-button mantra-primary-btn search-button">
          <i className="fa fa-search"></i>
        </button>
      </div>

      <div className="mantra-nav-footer">
        <Link to="/login">
          <button className="mantra-button mantra-primary-btn mantra-login-btn search-button">
            Login
          </button>
        </Link>

        <div className="mantra-badge">
          <div className="mantra-menu-icon">
            <span className="mantra-icon user-icon">
              <i
                class="fa fa-user"
                onClick={() => onClick()}
                aria-hidden="true"
              ></i>
              <nav
                ref={dropdownRef}
                className={`menu ${isActive ? "active" : "inactive"}`}
              >
                <ul>
                  <li>
                    <Link className="dropdown-option" to="">
                      PlayList
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-option" to="">
                      Watch Later
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-option" to="">
                      History
                    </Link>
                  </li>
                </ul>
              </nav>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
