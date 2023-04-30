import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidebar/Sidebar'
import FeaturedInfo from '../../component/featuredInfo/FeaturedInfo'
import "./home.scss"
import Chart from '../../component/chart/Chart'
import {userdata} from '../../userData'
import WidgetLg from '../../component/widgetLg/WidgetLg'
import WidgetSm from '../../component/widgetSm/WidgetSm'

const Home = () => {
  console.log(userdata)
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <FeaturedInfo/>
        <Chart data={userdata} title="User Analytics" grid dataKey="active user"/>
       <div className='homeWidget'>
       <WidgetSm/>
       <WidgetLg/>

       </div>
       
      </div>


    </div>
  )
}

export default Home