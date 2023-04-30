import React from 'react'
import "./featuredInfo.scss"
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

const featuredInfo = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featureTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2.415</span>
                    <span className="featuredMoneyRate">
                        -2.3 <ArrowDownward  className='featuredIcon'/>
                    </span>
                </div>
                <div><span className='featuredSub'>compared To lastmonth</span></div>



            </div>
            <div className="featuredItem">
                <span className="featureTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2.415</span>
                    <span className="featuredMoneyRate">
                        +2.3 <ArrowUpward  className='featuredIcon positive' />
                    </span>
                </div>
                <div><span className='featuredSub'>compared To lastmonth</span></div>



            </div>
            <div className="featuredItem">
                <span className="featureTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2.415</span>
                    <span className="featuredMoneyRate">
                        -2.3 <ArrowDownward  className='featuredIcon'  />
                    </span>
                </div>
                <div><span className='featuredSub'>compared To lastmonth</span></div>



            </div>
        </div>
    )
}

export default featuredInfo