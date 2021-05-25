import { useEffect, useState } from 'react'
import ListIcons from './ListIcons'
import './style/ContactList.css'

export default function ContactList(props) {

    function handleClick(event) {
        console.log(event.target)
    }

    if (props.contacts.length === 0) {
        return (
            <div id="contacts">
                <h2>No contact found</h2>
                <p>Try again, or create this contact</p>
            </div>
        )
    }
    else {
        return (
            <div id="contacts">                
                {props.contacts.map((contact, index) => {
                    return (
                    <div key={index} className="card_contact" onClick={handleClick}>
                        <div className="card_left">
                            <div className="card_avatar"></div>
                            <h3>{contact.pseudo}</h3>
                        </div>
                        <div className="card_right">
                            <div className="card_basic">
                                <p>Firstname : {contact.firstname}</p>
                                <p>Lastname : {contact.lastname}</p>
                            </div>
                            <div className="card_infoSup">
                                <ListIcons path="../../public/img/email.png" content={contact.email} />
                                <ListIcons path="../../public/img/phone.png" content={contact.telephone} />
                                <ListIcons path="../../public/img/twitter.png" content={contact.twitter} />
                                <ListIcons path="../../public/img/facebook.png" content={contact.facebook} />
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        )
    }
}