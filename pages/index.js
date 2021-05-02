import { Form } from "../public/components/Form"
import { Card } from "../public/components/Card"
import { useState, useEffect } from 'react';

function HomePage() {

    //path search pseudo //! localhost:3003/contacts?pseudo=${variable}

    const [isLoaded, setIsLoaded] = useState(false);
    const [contactList, setContactList] = useState([]);
    const [error, setError] = useState(null);

    const [formVisiblity, setFormVisiblity] = useState(false);
    const [contactPseudo, setContactPseudo] = useState(0);
    const [formObj, setFormObj] = useState({})

    useEffect(() => {
        
        fetch("http://localhost:3003/contacts", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: 'GET'
        })
        .then(rep => rep.json())
        .then(
            (result) => {
                setContactList(result);
                setIsLoaded(true);
            },
            (error) => {
                setError(error)
                setIsLoaded(true);
            }
        )
    }, [])

    function handleClick(e) {
        setFormVisiblity(true);
        let element = e.target;
        
        //adding a new contact
        if (element.id === "btn_add_contact") {
            console.log("hello friend")
        }
        //modify existing contact
        else {

            //cas click imprécis
            while (element.className !== "card_contact") {
                element = element.parentElement
            }
            //send props to Form
            //setContactPseudo(element.querySelector(".contact_pseudo").textContent);
            setContactPseudo(element.dataset.id);
            //console.log(contactPseudo)
            setFormObj(contactList[contactPseudo]) //! utiliser plus tard
            
        }

        console.log(e)
    }

    if (error) {
        console.log(error)
        return <div>Something went wrong...</div>
    }
    else if (isLoaded === false) {
        return <div>Loading...</div>
    }
    else {
        
        return (
            <div id="app">
                <div id="app_header">
                    <h1>My contact book</h1>
                    <button id="btn_add_contact" onClick={handleClick}>New contact</button>
                </div>
                <div id="contacts" onClick={handleClick}>                
                    {contactList.map((contact, index) => {
                        return (
                        <Card
                            id={index}
                            pseudo={contact.pseudo}
                            firstname={contact.firstname}
                            lastname={contact.lastname}
                            birthdate={contact.birthdate}
                            email={contact.email}
                            telephone={contact.telephone}
                            twitter={contact.twitter}
                            instagram={contact.instagram}
                        />
                        )
                    })}
                </div>
                <div id="the_form" className={formVisiblity ? "display_form" : "hide_form"}>
                    <input id="pseudo" type="text" value={contactList[contactPseudo].pseudo} placeholder="Your username" />
                    <input id="firstname"type="text" value={contactList[contactPseudo].firstname} placeholder="Your firstname" />
                    <input id="lastname"type="text" value={contactList[contactPseudo].lastname} placeholder="Your lastname" />
                    <input id="birthdate"type="text" value={contactList[contactPseudo].birthdate} placeholder="Your birthdate" />
                    <input id="email"type="text" value={contactList[contactPseudo].email} placeholder="Your email" />
                    <input id="tel"type="text" value={contactList[contactPseudo].telephone} placeholder="Your tel" />
                    <input id="twitter"type="text" value={contactList[contactPseudo].twitter} placeholder="Your twitter tag" />
                    <input id="instagram"type="text" value={contactList[contactPseudo].instagram} placeholder="Your instagram tag" />
                </div>
            </div>
        )
    }
}

export default HomePage
