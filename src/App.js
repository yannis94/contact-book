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

	const addContact = (newContact) => {
		//setContact( ...contacts, newContact )
	}
	const updateContact = (contactId, contactInfo) => {
		//contacts.map + replace
	}
	const deleteContact = (contactId) => {}
	return (
		<contactContext.Provider value={{ contacts, addContact, updateContact, deleteContact }}>
			<div className="App">
				<h1>My contact book</h1>
				<Searchbar />
				{
					isLoaded 
					? <ContactList /> 
					: error !== null 
						? <p>{error}</p> 
						: <p>Loading ...</p>
				}
				<SidePannel />
			</div>
		</contactContext.Provider>
	)

}

export default App;
