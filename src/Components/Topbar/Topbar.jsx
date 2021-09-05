import React from 'react'
import './Topbar.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import LanguageIcon from '@material-ui/icons/Language';
function Topbar() {
    return (
        <div className='topbar'>
           <div className="topbarWrapper">
           <div className="topLeft">
               <span className="logo">Admin</span>
           </div>
           <div className="topRight">
               <div className="topBarIconContainer">
                   <NotificationsIcon/>
                   <span className="topIconBadge">2</span>
               </div>
               <div className="topBarIconContainer">
                   <LanguageIcon/>
                   <span className="topIconBadge">2</span>
               </div>
               <div>
                   <SettingsIcon/>
               </div>
              <img className="topAvatar"
               src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"></img>
               
           </div>
               </div> 
        </div>
    )
}

export default Topbar
