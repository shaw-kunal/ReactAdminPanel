import React, { useEffect, useState } from 'react'
import './widgetSm.scss'
import { Visibility } from '@mui/icons-material'
import { userRequest } from '../../requestMethod'
const WidgetSm = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {

        const getUser = async () => {
            const res = await userRequest.get("users/?new=true")
            setUsers(res.data);
        }
        getUser();
    }, [])


    return (
        <div className='WidgetSm'>
            <div className="widgetSmTitle">Join new Member  </div>
            <ul className="widgetSmList">
                {
                    users.map((user) => (
                        <li className="widgetSmListItem" key={user.id}>
                            <img src={user.img || "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"} alt="" />
                            <div className="widgetSmUser">
                                <span className="widgetSmUsername">{user.username}</span>
                                <span className="widgetSmUserTitle">{user.email}</span>
                            </div>
                            <button className="widgetSmButton">
                                <Visibility />Display
                            </button>
                        </li>
                    ))
                }


            </ul>

        </div>
    )
}

export default WidgetSm