import { Form } from "../public/components/Form"
import { useState, useEffect } from 'react';

function HomePage() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [contactList, setContactList] = useState([]);
    const [error, setError] = useState(null);

    const [formDisplay, setFormDisplay] = useState(false);
    const [formInfo, setFormInfo] = useState({})

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
                setIsLoaded(true);
                setContactList(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error)
            }
        )
    }, [])

    function handleClick(e) {
       
        let element = e.target;

        //cas click imprécis
        while (element.className !== "card_contact") {
            element = element.parentElement
        }

        //send props to Form
        setFormDisplay(true)
        setFormInfo(contactList[element.dataset.id])
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
                <div id="contacts">                
                    {contactList.map((contact, index) => {
                        return (
                        <div data-id={index} className="card_contact" onClick={handleClick}>
                            <div className="card_top">{contact.pseudo}</div>
                            <div className="card_basic">
                                <p>Firstname : {contact.firstname}</p>
                                <p>Lastname : {contact.lastname}</p>
                            </div>
                            <div className="card_infoSup">
                                <p>Birth date : {contact.infoSup.birthdate}</p>
                                <p>Email : {contact.infoSup.email}</p>
                                <p>Telephone : {contact.infoSup.telephone}</p>
                                <p>Twitter : @{contact.infoSup.twitter}</p>
                                <p>Instagram : @{contact.infoSup.instagram}</p>
                            </div>
                        </div>
                        )
                    })}
                </div>
                <Form display={formDisplay} contact={formInfo}/>
            </div>
        )
    }
}

export default HomePage
