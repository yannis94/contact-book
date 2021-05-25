import { useEffect, useState } from 'react'
import './style/SidePannel.css'

export default function Searchbar(props) {

    let contacts_obj = {}

    let labelsDisplay = {
        "username": false,
        "firstname": false,
        "lastname": false,
        "email": false,
        "tel": false,
        "twitter": false,
        "facebook": false,
    }

    function handleClick(e) {
        let username = document.querySelector("#username").value;
        if ( username !== "") {
            contacts_obj = {
                "pseudo": document.querySelector("#username").value,
                "firstname": document.querySelector("#firstname").value,
                "lastname": document.querySelector("#lastname").value,
                "email": document.querySelector("#email").value,
                "telephone": document.querySelector("#tel").value,
                "twitter": document.querySelector("#twitter").value,
                "facebook": document.querySelector("#facebook").value
            }
            console.log(contacts_obj)
            fetch(`http://localhost:3003/contacts`, {
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: 'POST',
              body: JSON.stringify(contacts_obj)
            })
        }
    }

    function handleChange (e) {
        if (e.target.value !== "") {
            labelsDisplay[`${e.target.id}`] =  true
            console.log(labelsDisplay.username)
        }
        else {
            labelsDisplay[e.target.id] =  false
            console.log(labelsDisplay[`${e.target.id}`])
        }
    }

    return (
        <div className="pannelContainer">
            <div className="pannelInputs" onChange={handleChange}>
                {//voir condition affichage label
                }
                <label for="username">{ labelsDisplay["username"] === true ? "null" : "Pseudo" }</label>
                {labelsDisplay.username ? "z" : <label for="username">Pseudo</label>}
                <input id="username" type="text" placeholder="Your username" />
                <label for="firstname">{ labelsDisplay["firstname"] ? null : "Firstname" }</label>
                <input id="firstname"type="text" placeholder="Your firstname" />
                <label for="lastname">{ labelsDisplay["lastname"] ? null : "Lastname" }</label>
                <input id="lastname"type="text" placeholder="Your lastname" />
                <label for="email">{ labelsDisplay["email"] ? null : "Email address" }</label>
                <input id="email"type="text" placeholder="Your email" />
                <label for="tel">{ labelsDisplay["tel"] ? null : "Phone number" }</label>
                <input id="tel"type="text" placeholder="Your tel" />
                <label for="twitter">{ labelsDisplay["twitter"] ? null : "Twitter" }</label>
                <input id="twitter"type="text" placeholder="Your twitter tag" />
                <label for="facebook">{ labelsDisplay["facebook"] ? null : "Facebook" }</label>
                <input id="facebook"type="text" placeholder="Your facebook tag" />
            </div>
            <button onClick={handleClick}>Create</button>
        </div>
    )
}