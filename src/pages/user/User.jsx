import React from 'react'
import "./singleUser.scss"
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navbar'
import { CalendarMonth, CalendarToday, LocalActivityRounded, LocationSearching, MailOutlineOutlined, PermIdentity, PhoneAndroid, Publish, PublishOutlined, PublishRounded } from '@mui/icons-material'

const User = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className='user'>
          <div className="userTitleContainer">
            <h3 className="userTitle">Edit user</h3>
            <button className='userAddButton'>Create</button>
          </div>
          <div className="userContainer">
            <div className="userShow">
              <div className='userShowTop'>
                <img className='userImg'
                  src="data:image/jpeg;base64,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"
                  alt="" />
                <div className='userShowTopTitle'>
                  <span className='userName'>Anna becker</span>
                  <span className='userJob'>Senior software develop </span>
                </div>
              </div>

              <div className="userShowButton">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                  <PermIdentity className='userShowIcon' />
                  <span className="userShowInfoTitle">Anna beck2001</span>
                </div>
                <div className="userShowInfo">
                  <CalendarToday className='userShowIcon' />
                  <span className="userShowInfoTitle">30.10.2001</span>
                </div>
                <span className="userShowTitle">Account Details</span>

                <div className="userShowInfo">
                  <PhoneAndroid className='userShowIcon' />
                  <span className="userShowInfoTitle">+91 6289197569</span>
                </div>
                <div className="userShowInfo">
                  <LocationSearching className='userShowIcon' />
                  <span className="userShowInfoTitle">Los Angeles</span>
                </div>
                <div className="userShowInfo">
                  <MailOutlineOutlined className='userShowIcon' />
                  <span className="userShowInfoTitle">anna521@gmail.com</span>
                </div>
              </div>

            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
              <form action="" className="editContainer">

                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Username</label>
                    <input
                      type='text'
                      placeholder='annabeck99'
                      className='userUpdadeInput'
                    />
                  </div>

                  <div className="UserUpdateLeft">
                    <div className="userUpdateItem">
                      <label>Full Name</label>
                      <input
                        type='text'
                        placeholder='Anna Beckar'
                        className='userUpdadeInput'
                      />
                    </div>
                  </div>
                  <div className="UserUpdateLeft">
                    <div className="userUpdateItem">
                      <label>Email</label>
                      <input
                        type='text'
                        placeholder='annabeck99@gmail.com'
                        className='userUpdadeInput'
                      />
                    </div>
                  </div>
                  <div className="UserUpdateLeft">
                    <div className="userUpdateItem">
                      <label>Phone </label>
                      <input
                        type='text'
                        placeholder='+1 6289197569'
                        className='userUpdadeInput'
                      />
                    </div>
                  </div>
                  <div className="UserUpdateLeft">
                    <div className="userUpdateItem">
                      <label>Address</label>
                      <input
                        type='text'
                        placeholder='Log angels'
                        className='userUpdadeInput'
                      />
                    </div>
                  </div>
                </div>



                <div className="userUpdateRight">
                  <div className="userUpdateLoad">
                    <img
                      src="data:image/jpeg;base64,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"
                      className='userUpdateImage' alt="" />
                    <lable htmlFor="file"><PublishRounded /></lable>
                    <input type='file' id="file"
                      style={{ display: "none" }} />



                  </div>
                </div>


              </form>

            </div>
          </div>


        </div>


      </div>
    </div>
  )
}

export default User