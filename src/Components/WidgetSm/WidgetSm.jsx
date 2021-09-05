import { Visibility } from '@material-ui/icons'
import React from 'react'
import './WidgetSm.css'
function WidgetSm() {
    return (
        <div className="WidgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1727&q=80"
                     alt="" className="widgetIMg" />
                     <div className="widgetSmUser">
                     <span className="widgetSmUsername">Monica</span>
                    <span className="widgetSmUserTitle">React Developer</span>
                     </div>
                    <button className="widgetSmbutton">
                        <Visibility/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm
