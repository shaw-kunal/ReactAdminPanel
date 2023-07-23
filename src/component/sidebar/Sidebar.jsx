import { AccountBoxOutlined, AccountCircle, AllInboxOutlined, BorderColorOutlined, BugReportSharp, CloudUploadOutlined, ColorLens, Dashboard, EqualizerOutlined, ExitToAppOutlined, Login, LoginOutlined, LoginRounded, LoginTwoTone, NotificationAddOutlined, PsychologyAltOutlined, SettingsApplications, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import "./sidebar.scss"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/UserSlice'





const Sidebar = () => {
    
    const dispatch = useDispatch();
    const handleLogout=()=>{
    dispatch(logout());
    }
    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">Admin panel</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" className='link'> <li><Dashboard className='icon' /><span>dashboard</span></li>
                    </Link>

                    <Link to="/users" className='link'><li><AccountCircle className='icon' /><span>User</span></li>
                    </Link>

                    <Link to="/product" className='link'>
                        <li><ShoppingCartOutlined className='icon' /><span>Product</span></li>
                    </Link>
                    <li><BorderColorOutlined className='icon' /><span>Orders</span></li>
                    <li><AllInboxOutlined className='icon' /><span>Delivery</span></li>
                    <p className="title">USEFUL</p>
                    <li><EqualizerOutlined className='icon' /><span>Stats</span></li>
                    <li><NotificationAddOutlined className='icon' /><span>Notification</span></li>
                    <p className="title">SERVICE</p>

                    <li><CloudUploadOutlined className='icon' /><span>System Health</span></li>
                    <li><PsychologyAltOutlined className='icon' /><span>Logs</span></li>
                    <li><SettingsApplications className='icon' /><span>Setting</span></li>
                    <p className="title">USER</p>

                    <li><AccountBoxOutlined className='icon' /><span>Profile</span></li>
                    <Link to="/login" className='link'>
                        <li><LoginOutlined className='icon' /><span>Login</span></li>
                    </Link>
                    <li onClick={handleLogout}><ExitToAppOutlined className='icon' /><span>Logout</span></li>
                </ul>
            </div>
            <hr />
            <div className="bottom">
                <div className="option">
                    <div className='backgroundTitle'><ColorLens className='icon' /><span>Background</span>:</div>
                    <div className="optionItem"></div>
                    <div className="optionItem"></div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
