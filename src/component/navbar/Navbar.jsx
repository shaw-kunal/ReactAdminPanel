import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationAddOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material'
import { Avatar, AvatarGroup, IconButton, ListItemAvatar } from '@mui/material'
import React from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbarWrapper">



        <div className="search">
          <div className="searchfield">
            <input type="text" placeholder='search...' />
            <SearchOutlined className='icon' />
          </div>
        </div>

        <div className="items">
           <div className="item"><LanguageOutlined className='icon' />English</div>
          <div className="item"><DarkModeOutlined className='icon' /></div>
          <div className="item"><FullscreenExitOutlined className='icon' /></div>
          <div className="item"><ChatBubbleOutlineOutlined className='icon' />
            <div className="counter">2</div>
          </div>
          <div className="item"><IconButton><NotificationsNoneOutlined className='icon' /></IconButton>
            <div className="counter">2</div>
          </div>
          <div className="item"><ListOutlined className='icon' /></div>
          <div className="item"><Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" /></div>
        </div>

      </div>
    </div>
  )
}

export default Navbar