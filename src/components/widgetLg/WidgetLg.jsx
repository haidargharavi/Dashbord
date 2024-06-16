import React from 'react'
import './widgetLg.css'
import { TransActions } from '../../data'

export default function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={'widgetLgButton ' + type}>{type}</button>
    }
    return (
        <div className='widgetLg'>
            <h3 className='widgetLgTitle'> Latest TransActions</h3>
            <table className='widgetLgTable'>
                <tr className='widgetLgTr'>
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                {TransActions.map((customer) => {
                    return (

                        <tr className='widgetLgTr'>
                            <td className="widgetLgUser">
                                <img src={customer.img} className='widgetLgImg' />
                                <span className='widgetLgName'>{customer.customer}</span>
                            </td>

                            <td className='widgetLgDate'>
                                {customer.date}
                            </td>

                            <td className='widgetLgAmount'>
                                ${customer.amount}
                            </td>

                            <td className='widgetLgStatus'>
                                <Button type={customer.status} />
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}
