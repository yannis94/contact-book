export function Form() {

    let contacts_obj = {};

    //fetch db contact
    fetch("http://localhost:3003/contacts", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method: 'GET'
    })
    .then(rep => rep.json()
    .then(db => {
        for (const contact in db) {
            contacts_obj[contact] = db[contact]
        }
    }))


    function handleClick(e) {
        name = document.querySelector("#username").value;
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

    return (
        <div>
            <input id="username" type="text" placeholder="Your username" />
            <input id="firstname"type="text" placeholder="Your firstname" />
            <input id="lastname"type="text" placeholder="Your lastname" />
            <input id="email"type="text" placeholder="Your email" />
            <input id="tel"type="text" placeholder="Your tel" />
            <input id="twitter"type="text" placeholder="Your twitter tag" />
            <input id="instagram"type="text" placeholder="Your instagram tag" />
            <button onClick={handleClick}>Create</button>
        </div>
    )
}