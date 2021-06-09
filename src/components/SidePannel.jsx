import { useEffect, useState, useContext } from 'react'
import { contactContext } from '../Context'
import '../style/SidePannel.css'

export default function SidePannel(props) {
    let { contacts, pannelObj, addContact, deleteContact, updateContact } = useContext(contactContext)
    
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
        if (e.target.dataset.action === "create") {
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
            }
            addContact(contacts_obj)
        }
        else if (e.target.dataset.action === "update") {
            console.log("update contact")
        }
        else if (e.target.dataset.action === "delete") {
            console.log("delete contact")
        }
    }
    function closePannel(el) {
        pannelObj.openPannel(false)
        console.log(pannelObj.content)
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
        <div>
            <div className={`curtain${pannelObj.isOpen ? " curtainVisible" : " curtainInvisible"}`}></div>
            <div className={`pannelContainer${pannelObj.isOpen ? " pannelOpen" : " pannelClose"}`}>
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
                {Object.keys(pannelObj.content).length > 0 ? <div id="pannelBottom"><button data-action="update" onClick={handleClick}>Update</button><button data-action="delete" onClick={handleClick}>Delete</button></div> : <button data-action="create" onClick={handleClick}>Create</button>}
               
            </div>
        </div>
    )
}