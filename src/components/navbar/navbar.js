import React from 'react'
import "./navbar.css";
import avatar from "../../asset/avatar.jpg";
import Login from "../login/login";
import {
    Switch,
    Route,
  } from "react-router-dom";
  

import {Link} from 'react-router-dom';
export const Navbar = ({sidebarOpen,openSidebar}) => {
    return (<>
        <Switch>
   
        <Route path='/login' component={Login}/>
    </Switch>
        <nav className="navbar ">
        <div className="nav_icon" onClick={()=>openSidebar()}>
            <i className="fa fa-bars"></i>
        </div>
        <div className="navbar__left">
        <Link to='/login' target="_blank">Login</Link>
        <a href="#">Viewer</a>
        <a href="#">Post management</a>
        <a className="active_link" href="#">Admin</a>
        </div>
        <div className="navbar__right"></div>
        <a href="#"> <i className="fa fa-search"></i></a>
        <a href="#"> <i className="fa fa-clock-o"></i></a>
        <a href="#"> <img width="30" src={avatar} alt="avatar"></img></a>

        </nav></>
    )
}

export default Navbar;