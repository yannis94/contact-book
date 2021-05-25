import { useContext, useState } from 'react'
import './style/ListIcons.css'

export default function ListIcons (props) {
    return (
        <div className="listIcon" >
            <img src={props.path} />
            <p>{props.content}</p>
        </div>
    )
}