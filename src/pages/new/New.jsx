import React from 'react'
import "./new.scss"
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navbar'

const New = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />

        <div className="newUser">
          <h2 className="newUSerTitle">New User </h2>
          <form action="" className="newUserForm">
            <div className="newUserItem">
              <label>UserName</label>
              <input type="text" placeholder="jenny321" />
            </div>
            <div className="newUserItem">
              <label>Full Name</label>
              <input type="text" placeholder="jenny falkin" />
            </div>
            <div className="newUserItem">
              <label>Email</label>
              <input type="text" placeholder="jenny21@gmail.com" />
            </div>
            <div className="newUserItem">
              <label>Password</label>
              <input type="password" placeholder="password" />
            </div>
            <div className="newUserItem">
              <label>Phone</label>
              <input type="text" placeholder="+91 938879242" />
            </div>
            <div className="newUserItem">
              <label>Address</label>
              <input type="text" placeholder="Los angels" />
            </div>

            <div className="newUserItem">
              <label>Gender</label>
              <div className="newUserGender">
                <input type="radio" name="gender" id="male" value="male" />
                <label for="male">Male</label>

                <input type="radio" name="gender" id="female" value="female" />
                <label for="female">Female</label>

                <input type="radio" name="gender" id="male" value="male" />
                <label for="other">other</label>
              </div>
            </div>

            <div className="newUserItem">
              <label htmlFor="">Active</label>
              <select name="active" id="active" className='newUserSelect'>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <button className='newUserBtn'>Create</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default New