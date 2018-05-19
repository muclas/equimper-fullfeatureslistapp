import React from "react";
import PropTypes from "prop-types";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import "./styles.css";

const NavBar = ({ path }) => (
  <Menu>
    <Menu.Menu>
      <Menu.Item>
        <Link to="/">
          MyFullFeaturesList <img src={logo} alt="logo" className="NavBar" />
        </Link>
      </Menu.Item>
    </Menu.Menu>
    <Menu.Menu position="right">
      <Menu.Item active={path === "/signup"}>
        <Link to="/signup">Signup</Link>
      </Menu.Item>
      <Menu.Item active={path === "/login"}>
        <Link to="/login">Login</Link>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

NavBar.propTypes = {
  path: PropTypes.string.isRequired
};

export default NavBar;
