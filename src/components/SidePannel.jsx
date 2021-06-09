import { useEffect, useState, useContext } from 'react'
import { contactContext } from '../Context'
import '../style/SidePannel.css'

export default function SidePannel(props) {
    let { contacts, openPannel, pannelOpen } = useContext(contactContext)
    
    const [ labelsObj, setLabelsObj ] = useState({
        "username": true,
        "firstname": true,
        "lastname": true,
        "email": true,
        "tel": true,
        "twitter": true,
        "facebook": true
    })


    function handleClick(e) {
        let contacts_obj = {}
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
    function closePannel(el) {
        openPannel(false)
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
        <div className={`pannelContainer${pannelOpen ? " pannelOpen" : " pannelClose"}`}>
            <div className="closeBtn" onClick={closePannel}>
                {">"}
            </div>
            <div className="pannelInputs" onChange={handleChange}>
                {labelsObj["username"] ? null : <label for="username">Username</label>}
                <input id="username" type="text" placeholder="Username" />


                {labelsObj["firstname"] ? null : <label for="firstname">Firstname</label>}
                <input id="firstname"type="text" placeholder="Firstname" />


                {labelsObj["lastname"] ? null : <label for="lastname">Lastname</label>}
                <input id="lastname"type="text" placeholder="Lastname" />


                {labelsObj["email"] ? null : <label for="email">Email address</label>}
                <input id="email"type="text" placeholder="Email address" />


                {labelsObj["tel"] ? null : <label for="tel">Phone number</label>}
                <input id="tel"type="text" placeholder="Phone number" />


                {labelsObj["twitter"] ? null : <label for="twitter">Twitter tag</label>}
                <input id="twitter"type="text" placeholder="Twitter tag" />


                {labelsObj["facebook"] ? null : <label for="facebook">Facebook tag</label>}
                <input id="facebook"type="text" placeholder="Facebook tag" />

            </div>
            <button onClick={handleClick}>Create</button>
        </div>
    )
}