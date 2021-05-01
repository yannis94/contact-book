import { useState, useEffect } from 'react';

export function ContactsList() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [contactList, setContactList] = useState([]);
    const [error, setError] = useState(null);

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

    console.log(contactList)
    if (error) {
        console.log(error)
        return <div>Something went wrong...</div>
    }
    else if (isLoaded === false) {
        return <div>Loading...</div>
    }
    else {
        return (
            <div id="contacts">                
                {contactList.map((contact, index) => {
                    return (
                    <div data-id={index} className="card_contact">
                        <div className="card_top">{contact.pseudo}</div>
                        <div className="card_basic">
                            <p>Firstname : {contact.firstname}</p>
                            <p>Lastname : {contact.lastname}</p>
                        </div>
                        <div className="card_infoSup">
                            <p>Email : {contact.infoSup.email}</p>
                            <p>Telephone : {contact.infoSup.telephone}</p>
                            <p>Twitter : @{contact.infoSup.twitter}</p>
                            <p>Instagram : @{contact.infoSup.instagram}</p>
                        </div>
                    </div>
                    )
                })}
            </div>
        )
    }
}