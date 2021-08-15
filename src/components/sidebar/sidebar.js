import React from 'react'
import './sidebar.css'
import logo from "../../asset/logo.png"
const Sidebar = ({sidebarOpen,closeSidebar}) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""}id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo"/>
                    <h1>Sonika Sharan</h1></div>
                    <i className="fa fa-user" id="sidebarIcon" onClick={()=>closeSidebar()}></i>
                </div>
                <div className="sidebar__menu">
                    <div className="sidebar__link active_menu_link">
                        <i className="fa fa-home"></i>
                        <a href="#" >Dashboard</a>
                    </div>
                    <h2>MNG</h2>
                    <div className="sidebar__link">
                    <i className="fa fa-user-secret"></i>
                    <a href="#">Admin Management</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-building-o"></i>
                    <a href="#">Company Management</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-wrench"></i>
                    <a href="#">Employee Management</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Warehouse</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-user-secret"></i>
                    <a href="#">Contracts</a>
                </div>
                <h2>LEAVE</h2>
                <div className="sidebar__link">
                    <i className="fa fa-question"></i>
                    <a href="#">Request</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-calendar-check-o"></i>
                    <a href="#">Special Day</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-files-o"></i>
                    <a href="#">Apply for Leave</a>
                </div>
                <h2>PayRoll</h2>
                <div className="sidebar__link">
                    <i className="fa fa-money"></i>
                    <a href="#">PayRoll</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Log out</a>
                </div>
           </div>
        </div>
    )
}
export default Sidebar;
