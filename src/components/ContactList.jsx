import {  useContext } from 'react'
import ListIcons from './ListIcons.jsx'
import '../style/ContactList.css'
import { contactContext } from '../Context'

import email from "../img/email.png"
import phone from "../img/phone.png"
import twitter from "../img/twitter.png"
import facebook from "../img/fb.png"

export default function ContactList(props) {
    
    const { contacts, pannelObj } = useContext(contactContext)
    //console.log(contacts)

    function handleClick(event) {
        //let contactCard = event.target
        while (event.target.className !== "card_contact") {
            event.target = event.target.parentElement
            //console.log(event.target)
        }
        
        let contactId = parseInt(event.target.dataset.id) - 1
        
        pannelObj["content"] = contacts[contactId]
        console.log(pannelObj["content"])
        pannelObj.openPannel(true)
        //open pannel with contact info
    }
 
    
    return (
        <div id="contacts"> 
            {contacts.length === 0 ? <h3 className="loading">No contact found</h3> : null} 
            {contacts && contacts.map((contact, index) => {
                //console.log(contact.id)
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
                            <ListIcons path={twitter} content={contact.twitter} />
                            <ListIcons path={facebook} content={contact.facebook} />
                        </div>
                    </div>
                </div>
                )
            })}            
        </div>
    )
}
