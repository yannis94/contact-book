import { Form } from "../public/components/Form"
import { Card } from "../public/components/Card"

import { useState, useEffect, useDebugValue } from 'react';

function HomePage() {

    //path search pseudo //! localhost:3003/contacts?pseudo=${variable}

    const [isLoaded, setIsLoaded] = useState(false);
    const [contactList, setContactList] = useState([]);
    const [error, setError] = useState(null);

    const [url, setUrl] = useState("http://localhost:3003/contacts");

    useEffect(() => {
        fetch(url, {
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
    }, [url])


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

    function searchBarChange(e) {
        console.log(e.target.value)
        if (e.target.value !== "") {
            setUrl(`http://localhost:3003/contacts?pseudo=${e.target.value}`);
        }
        else {
            setUrl("http://localhost:3003/contacts");
        }
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
                <div id="searchbar-section">
                    <input type="text" placeholder="Search contact ..." onChange={searchBarChange} />
                </div>
                <div id="contacts" onClick={handleClick}>                
                    {
                        contactList.length > 0 ? 
                            contactList.map((contact, index) => {
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
                            })
                        :
                            <div><h3>No contact found...</h3></div>
                    }
                </div>
            </div>
        )
    }
}

export default HomePage
