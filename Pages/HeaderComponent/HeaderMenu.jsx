import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link to="">preamium</Link>
          </li>
          <li>
            <Link to="">support</Link>
          </li>
          <li>
            <Link to="">Download</Link>
          </li>
          <li className="bar">
            <a href=""></a>
          </li>
          <li>
            <Link to="/signup">signup</Link>
          </li>

          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default HeaderMenu;
