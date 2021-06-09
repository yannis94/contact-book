import { useEffect, useState, useContext } from 'react'
import ListIcons from './ListIcons.jsx'
import '../style/ContactList.css'
import { contactContext } from '../Context'

import email from "../img/email.png"
import phone from "../img/phone.png"
//import twitter from "../img/twitter.png"
import facebook from "../img/fb.png"

export default function ContactList(props) {
    
    const {contacts} = useContext(contactContext)
    console.log(contacts)

    function handleClick(event) {
        while (event.target.className !== "card_contact") {
            event.target = event.target.parentElement
        }
        
        let contactId = event.target.dataset.id

        //open pannel with contact info
    }
 
    
    return (
        <div id="contacts">  
            {contacts && contacts.map((contact, index) => {
                console.log(contact.id)
                return (
                <div key={index} data-id={contact.id} className="card_contact" onClick={handleClick}>
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
                            <ListIcons path={email} content={contact.email} />
                            <ListIcons path={phone} content={contact.telephone} />
                            {/*<ListIcons path={twitter} content={contact.twitter} />*/}
                            <ListIcons path={facebook} content={contact.facebook} />
                        </div>
                    </div>
                </div>
                )
            })}            
        </div>
    )
}
