import React from 'react'
import "./topbar.css"
import {Notifications,Language,Settings} from '@mui/icons-material/';


export default function Topbar() {
  return (
    <div className="topbar">
       <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">SKadmin</span>
        </div>
        <div className="topRight">
            <div className="topbarIconContainer">
               <Notifications />
               <span className="topIconBadge">2</span>
            </div>

            <div className="topbarIconContainer">
               <Language />
               <span className="topIconBadge">2</span>
            </div>

            <div className="topbarIconContainer">
               <Settings />
            </div>
             <img src="https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="topAvatar" />
        </div>
       </div>
    </div>
  )
}
