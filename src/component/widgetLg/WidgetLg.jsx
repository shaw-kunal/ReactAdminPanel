import React, { useEffect, useState } from 'react'
import './widgetLg.scss'
import { userRequest } from '../../requestMethod'
import {format} from "timeago.js"

export const Button = ({ type }) => {
  return <button class></button>

}

const WidgetLg = () => {
  const [orders, setorders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const res = await userRequest.get("orders");
      setorders(res.data);
    }
    getOrders();


  }, [])


  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className='WidgetLg'>
      <h3 className="widgetTitle">Latest Transaction</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">satatus</th>
        </tr>
        {
            orders.map((order)=>(
              
        <tr className="widgetLgTr" key={order.userId}>
          <td className="widgetLgUser">
            {/* <img className='widgetLgImg' src={order.img}/> */}
            <span className='widgetLgName'>{order.userId}</span>
          </td>
          <td className='widgetLgDate'>{format(order.createdAt)}</td>
          <td className='widgetLgAmount'>${order.amount}</td>
          <td className='widgetLgStatus'><Button type={order.status} /></td>
        </tr>

            ))
        }
      </table>
    </div>
  )
}

export default WidgetLg