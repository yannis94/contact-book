import { useEffect, useState, useContext } from 'react'
import { contactContext } from '../Context'
import '../style/SidePannel.css'

export default function Searchbar(props) {
    const { contacts, addContact } = useContext(contactContext)
    const [ labelsObj, setLabelsObj ] = useState({
        "username": true,
        "firstname": true,
        "lastname": true,
        "email": true,
        "tel": true,
        "twitter": true,
        "facebook": true
    })

    let contacts_obj = {}

    let inputs = {
        "username": <input id="username" type="text" placeholder="Your username" />,
        "firstname": <input id="firstname"type="text" placeholder="Your firstname" />,
        "lastname": <input id="lastname"type="text" placeholder="Your lastname" />,
        "email": <input id="email"type="text" placeholder="Your email" />,
        "tel": false,
        "twitter": false,
        "facebook": false
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
        //addContact(contacts_obj)
    }

    function handleChange (e) {
        let labelStatus = { ...labelsObj }
        if (e.target.value !== "") {
            labelStatus[e.target.id] = false
            setLabelsObj(labelStatus)
        }
        else {
            labelStatus[e.target.id] =  true
            setLabelsObj(labelStatus)
        }
        console.log(labelsObj)
    }

    return (
        <div className="pannelContainer">
            <div className="pannelInputs" onChange={handleChange}>
                {//voir condition affichage label
                labelsObj["username"] ? null : <label for="username">Your username</label>
                }
                <input id="username" type="text" placeholder="Your username" />
                <input id="firstname"type="text" placeholder="Your firstname" />
                <input id="lastname"type="text" placeholder="Your lastname" />
                <input id="email"type="text" placeholder="Your email" />
                <input id="tel"type="text" placeholder="Your tel" />
                <input id="twitter"type="text" placeholder="Your twitter tag" />
                <input id="facebook"type="text" placeholder="Your facebook tag" />

                {inputs.map(input => {
                    return input
                })}
            </div>
            <button onClick={handleClick}>Create</button>
        </div>
    )
}