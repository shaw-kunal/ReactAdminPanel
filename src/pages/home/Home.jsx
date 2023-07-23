import React, { useEffect, useMemo, useState } from 'react'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidebar/Sidebar'
import FeaturedInfo from '../../component/featuredInfo/FeaturedInfo'
import "./home.scss"
import Chart from '../../component/chart/Chart'
import {userdata} from '../../userData'
import WidgetLg from '../../component/widgetLg/WidgetLg'
import WidgetSm from '../../component/widgetSm/WidgetSm'
import { userRequest } from '../../requestMethod'

const Home = () => {
  // console.log(userdata)

  const [userStats, setUserStats] = useState([])
  const MONTH =useMemo(
     ()=>[
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
  ],
)
useEffect(()=>{
  const getStats = async()=>{
    try {
       let userData=[]
      const res = await userRequest.get("users/stats")
      res.data.sort((a,b)=>{
        return a._id - b._id
      });
      res.data.map(item=>{
        userData.push({name:MONTH[item._id-1],"Active User":item.total})
        
      })


      setUserStats(userData)
    } catch (error) {
      console.log(error.message)
      
    }
  }

  getStats();
  console.log(userStats)
},[])



  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <FeaturedInfo/>
        <Chart data={userStats} title="User Analytics" grid dataKey="Active User"/>
       <div className='homeWidget'>
       <WidgetSm/>
       <WidgetLg/>

       </div>
       
      </div>


    </div>
  )
}

export default Home