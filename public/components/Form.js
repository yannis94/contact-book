import { useState, useEffect } from 'react';

export function Form(props) {
    const [visible, setVisible] = useState(false);
    const [contactInfo, setContactInfo] = useState({});
    //setVisible(props.visible)
        /*fetch(`http://localhost:3003/contacts?pseudo=${props.pseudo}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET'
        })
        .then(rep => rep.json())
        .then((result) => {
            console.log("-------")
            console.log(`http://localhost:3003/contacts?pseudo=${props.pseudo}`)
            console.log(result)
            console.log("-------")
            setContactInfo(result);
            //setDataFetch(true);
        },
        (error) => {
            //setError(error)
            //setDataFetch(true);
        })
        //console.log(props.newcontact)

*/

    /*fetch(`http://localhost:3003/contacts?pseudo=${props.pseudo}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET'
    })
    .then(rep => rep.json())
    .then((result) => {
        console.log("-------")
        console.log(`http://localhost:3003/contacts?pseudo=${props.pseudo}`)
        console.log(result)
        console.log("-------")
        setContactInfo(result);
        //setDataFetch(true);
    },
    (error) => {
        //setError(error)
        //setDataFetch(true);
    })*/
    //console.log(props.newcontact)
    
    function handleClick(e) {
        name = document.querySelector("#pseudo").value;
        if ( name !== "") {
            contacts_obj[name] = {
                
                "firstname": document.querySelector("#firstname").value,
                "lastname": document.querySelector("#lastname").value,
                "infoSup" : {
                    "email": document.querySelector("#email").value,
                    "telephone": document.querySelector("#tel").value,
                    "twitter": document.querySelector("#twitter").value,
                    "instagram": document.querySelector("#instagram").value
                }
                
            }
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

    function closeForm(e) {
        console.log("close")
        setVisible(false)
    }

    function handleChange(e) {
        console.log(e.target)
        
    }

    

    /*if (error) {
        return <div id="contact_infos" className="display_form" onChange={handleChange}>Error append, reload</div>
    }
    else if (dataFetch === false) {
        return <div id="contact_infos" className="display_form" onChange={handleChange}>Loading</div>
    }
    else {
        
        console.log(contactInfo)

        return (
            <div id="contact_infos" className={props.display ? "display_form" : "hide_form"} onChange={handleChange}>
                <button onClick={closeForm}>Close</button>
                <input id="pseudo" type="text" value={contactInfo.pseudo} placeholder="Your username" />
                <input id="firstname"type="text" value={contactInfo.firstname} placeholder="Your firstname" />
                <input id="lastname"type="text" value={contactInfo.lastname} placeholder="Your lastname" />
                <input id="birthdate"type="text" value={contactInfo.birthdate} placeholder="Your birthdate" />
                <input id="email"type="text" value={contactInfo.email} placeholder="Your email" />
                <input id="tel"type="text" value={contactInfo.telephone} placeholder="Your tel" />
                <input id="twitter"type="text" value={contactInfo.twitter} placeholder="Your twitter tag" />
                <input id="instagram"type="text" value={contactInfo.instagram} placeholder="Your instagram tag" />
                <button onClick={handleClick}>Create</button>
            </div>
        )
    }*/

    return (
        <div id="contact_infos" className={visible ? "display_form" : "hide_form"} onChange={handleChange}>
            <input id="pseudo" type="text" value={props.obj} placeholder="Your username" />
            <input id="firstname"type="text" value={props.obj} placeholder="Your firstname" />
            <input id="lastname"type="text" value={props.obj} placeholder="Your lastname" />
            <input id="birthdate"type="text" value={props.obj} placeholder="Your birthdate" />
            <input id="email"type="text" value={props.obj} placeholder="Your email" />
            <input id="tel"type="text" value={props.obj} placeholder="Your tel" />
            <input id="twitter"type="text" value={props.obj} placeholder="Your twitter tag" />
            <input id="instagram"type="text" value={props.obj} placeholder="Your instagram tag" />
        </div>
    )
    
}