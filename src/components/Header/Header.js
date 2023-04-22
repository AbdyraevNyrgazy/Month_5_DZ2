import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return <>
          <ul style={{display:"flex", listStyleType:"none"}}>
              <li>
                  <NavLink to="/">MainPage</NavLink>
              </li>
          </ul>
        </>

};

export default Header;