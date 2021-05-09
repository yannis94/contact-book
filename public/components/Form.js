import { useState, useEffect } from 'react';

export function Form(props) {
    const [visible, setVisible] = useState(false);
    const [contactInfo, setContactInfo] = useState({});
    
    return (
        <div id="contact_infos" className={visible ? "display_form" : "hide_form"} onChange={handleChange}>
            <input id="pseudo" type="text" value={props.obj} placeholder="Your username" />
            <input id="firstname"type="text" value={props.obj} placeholder="Your firstname" />
            <input id="lastname"type="text" value={props.obj} placeholder="Your lastname" />
            <input id="birthdate"type="text" value={props.obj} placeholder="Your birthdate" />
            <input id="email"type="text" value={props.obj} placeholder="Your email" />
            <input id="tel"type="text" value={props.obj} placeholder="Your tel" />
            <input id="twitter"type="text" value={props.obj} placeholder="Your twitter tag" />
            <input id="instagram"type="text" value={props.obj} placeholder="Your instagram tag" />
        </div>
    )
    
}