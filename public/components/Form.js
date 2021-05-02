export function Form(props) {


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

    if (props.display) {
        console.log(props.contact) //recup les info contact

        return (
            <div>
                <input id="pseudo" type="text" value={props.contact.pseudo} placeholder="Your username" />
                <input id="firstname"type="text" value={props.contact.firstname} placeholder="Your firstname" />
                <input id="lastname"type="text" value={props.contact.lastname} placeholder="Your lastname" />
                <input id="birthdate"type="text" value={props.contact.infoSup.birthdate} placeholder="Your birthdate" />
                <input id="email"type="text" value={props.contact.infoSup.email} placeholder="Your email" />
                <input id="tel"type="text" value={props.contact.infoSup.telephone} placeholder="Your tel" />
                <input id="twitter"type="text" value={props.contact.infoSup.twitter} placeholder="Your twitter tag" />
                <input id="instagram"type="text" value={props.contact.infoSup.instagram} placeholder="Your instagram tag" />
                <button onClick={handleClick}>Create</button>
            </div>
        )
    }
    else {
        return <div>no</div>
    }

    
}