import React from 'react'
import './widgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { newMembers } from '../../data';

export default function WidgetSm() {
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle"> New Join Members</span>
            <ul className="widgetSmList">
                {newMembers.map((member) => {
                    return (
                        <li className="widgetSmListItem">
                            <img src={member.img} className='widgetSmImg' />
                            <div className="widgetSmUser">
                                <span className="widgetSmUserName">{member.username}</span>
                                <span className="widgetSmUserTitle">{member.title}</span>
                            </div>
                            <button className="widgetSmButton">
                                <VisibilityIcon className='widgetSmIcon' />
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

