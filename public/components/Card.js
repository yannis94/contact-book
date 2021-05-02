import { useState, useEffect } from 'react';

export function Card(props) {
    function handleClick(e) {
        
    }

    return (
        <div data-id={props.id} className="card_contact" onClick={handleClick}>
            <div className="card_top"><strong className="contact_pseudo">{props.pseudo}</strong></div>
            <div className="card_basic">
                <label>Firstname : <p>{props.firstname}</p></label>
                <label>Lastname : <p>{props.lastname}</p></label>
            </div>
            <div className="card_infoSup">
                <label>Birth date : <p>{props.birthdate}</p></label>
                <label>Email : <p>{props.email}</p></label>
                <label>Telephone : <p>{props.telephone}</p></label>
                <label>Twitter : @<p>{props.twitter}</p></label>
                <label>Instagram : @<p>{props.instagram}</p></label>
            </div>
        </div>
    )
}