import './App.css';
import { useState, useEffect } from 'react'
import ContactList from './components/ContactList.jsx'
import Searchbar from './components/Searchbar.jsx'
import SidePannel from './components/SidePannel.jsx'
import Footer from './components/Footer.jsx'
import { contactContext } from "./Context"

function App() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [contacts, setContacts] = useState([]);
	const [error, setError] = useState(null);
	const [pannelOpen, setPannelOpen] = useState(false)
	const [url, setUrl] = useState("http://localhost:3003/contacts");
	const [pannelContent, setPannelContent] = useState({
		"pseudo": "",
		"firstname": "",
		"lastname": "",
		"email": "",
		"telephone": "",
		"twitter": "",
		"facebook": ""
	})


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
		"updateContent": function updateContent(obj) {
			setPannelContent(obj)
		},
		"content": pannelContent
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
		let listContact = [...contacts]
		listContact.length > 0 ? newContact.id = listContact[listContact.length-1].id + 1 : newContact.id = 1
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
			contacts.push(newContact)
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
			listContact.forEach(i => {
				if (i.id === id) {
					listContact[i] = contactInfo
					return
				}
			})
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
			listContact.forEach(i => {
				if (i.id === id) {
					listContact.pop(i.id)
					return
				}
			})
			setContacts(listContact)
			pannelObj.openPannel(false)
		})
		.catch(err => console.log(err))
	}

	let newContactPannel = true
	Object.keys(pannelObj.content).forEach(el => {
		if (pannelObj.content[el] !== "") {
			return newContactPannel = false
		}
	})

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
						: <h2 className="loading">Loading ...</h2>
				}
				<SidePannel isNew={newContactPannel} pannelState={pannelOpen} />
				<Footer />
			</div>
		</contactContext.Provider>
	)

}

export default App;
