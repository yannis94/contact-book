import { useState, useContext } from 'react'
import { contactContext } from '../Context'
import '../style/SidePannel.css'

export default function SidePannel(props) {
    let { pannelObj, addContact, deleteContact, updateContact } = useContext(contactContext)
    
    const [ labelsObj, setLabelsObj ] = useState({
        "pseudo": true,
        "firstname": true,
        "lastname": true,
        "email": true,
        "telephone": true,
        "twitter": true,
        "facebook": true
    })

    function handleClick(e) {
        if (e.target.dataset.action === "create") {
            
            let username = document.querySelector("#pseudo").value;
            if ( username !== "") {
                addContact(pannelObj.content)
            }
            else {
                return
            }
        }
        else if (e.target.dataset.action === "update") {
            updateContact(pannelObj.content.id, pannelObj.content)
        }
        else if (e.target.dataset.action === "delete") {
            deleteContact(pannelObj.content.id)
        }
    }
    function closePannel(el) {
        pannelObj.openPannel(false)
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
        pannelObj.content[e.target.id] = e.target.value
    }

    return (
        <div>
            <div className={`curtain${pannelObj.isOpen ? " curtainVisible" : " curtainInvisible"}`}></div>
            <div className={`pannelContainer${pannelObj.isOpen ? " pannelOpen" : " pannelClose"}`}>
                <div className="closeBtn" onClick={closePannel}>
                    {">"}
                </div>
                <div className="pannelInputs" onChange={handleChange}>
                    {labelsObj["pseudo"] ? null : <label htmlFor="pseudo">Username</label>}
                    <input id="pseudo" value={pannelObj.content.pseudo} type="text" placeholder="Username" />


                    {labelsObj["firstname"] ? null : <label htmlFor="firstname">Firstname</label>}
                    <input id="firstname" value={pannelObj.content.firstname} type="text" placeholder="Firstname" />


                    {labelsObj["lastname"] ? null : <label htmlFor="lastname">Lastname</label>}
                    <input id="lastname" value={pannelObj.content.lastname} type="text" placeholder="Lastname" />


                    {labelsObj["email"] ? null : <label htmlFor="email">Email address</label>}
                    <input id="email" value={pannelObj.content.email} type="text" placeholder="Email address" />


                    {labelsObj["telephone"] ? null : <label htmlFor="telephone">Phone number</label>}
                    <input id="telephone" value={pannelObj.content.telephone} type="text" placeholder="Phone number" />


                    {labelsObj["twitter"] ? null : <label htmlFor="twitter">Twitter tag</label>}
                    <input id="twitter" value={pannelObj.content.twitter} type="text" placeholder="Twitter tag" />


                    {labelsObj["facebook"] ? null : <label htmlFor="facebook">Facebook tag</label>}
                    <input id="facebook" value={pannelObj.content.facebook} type="text" placeholder="Facebook tag" />

                </div>
                {props.isNew === false ? <div id="pannelBottom"><button data-action="update" onClick={handleClick}>Update</button><button data-action="delete" onClick={handleClick}>Delete</button></div> : <button data-action="create" onClick={handleClick}>Create</button>}
               
            </div>
        </div>
    )
}