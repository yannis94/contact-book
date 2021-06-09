import './App.css';
import { useState, useEffect } from 'react'
import ContactList from './components/ContactList.jsx'
import Searchbar from './components/Searchbar.jsx'
import SidePannel from './components/SidePannel.jsx'
import { contactContext } from "./Context"

function App() {
	//path search pseudo //! localhost:3003/contacts?pseudo=${variable}

	const [isLoaded, setIsLoaded] = useState(false);
	const [contacts, setContacts] = useState([]);
	const [error, setError] = useState(null);
	const [pannelOpen, setPannelOpen] = useState(false)

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
				setContacts(result);
				setIsLoaded(true);
			},
			(error) => {
				setError(error)
				setIsLoaded(true);
			}
		)
	}, [url])

	let pannelObj = {
		"isOpen": pannelOpen,
		"openPannel": function openPannel(stats) {
			setPannelOpen(stats)
			return pannelOpen
		},
		"content": {}
	}

	const changeUrl = (val) => {
		if (val !== "") {
			setUrl(`http://localhost:3003/contacts?pseudo=${val}`)
		}
		else {
			setUrl("http://localhost:3003/contacts")
		}
	}

	const addContact = (newContact) => {
		fetch(`http://localhost:3003/contacts`, {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(newContact)
		}).then(()=> {
			let listContact =  [...contacts]
			listContact.push(newContact)
			setContacts(listContact)
			pannelObj.openPannel(false)
		})
		.catch(err => console.log(err))

	}
	const updateContact = (id, contactInfo) => {
		fetch(`http://localhost:3003/contacts/${id}`, {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'PUT',
			body: JSON.stringify(contactInfo)
		})
		.then(() => {
			let listContact = [...contacts]
			listContact[id-1] = contactInfo
			setContacts(listContact)
			pannelObj.openPannel(false)
		})
		.catch(err => console.log(err))

	}
	const deleteContact = (id) => {
		fetch(`http://localhost:3003/contacts/${id}`, {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'DELETE'
		})
		.then(() => {
			let listContact = [...contacts]
			listContact.pop(id-1)
			setContacts(listContact)
			pannelObj.openPannel(false)
		})
		.catch(err => console.log(err))

	}
	return (
		<contactContext.Provider value={{ contacts, addContact, updateContact, deleteContact, pannelObj, changeUrl }}>
			<div className="App">
				<h1>My contact book</h1>
				<Searchbar />
				{
					isLoaded 
					? <ContactList /> 
					: error !== null 
						? <p>{error}</p> 
						: <h3 className="loading">Loading ...</h3>
				}
				<SidePannel pannelState={pannelOpen} />
			</div>
		</contactContext.Provider>
	)

}

export default App;
