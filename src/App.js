import './App.css';

function App() {
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

  return (
    <div className="App">
      <h1>My contact book</h1>
      <Searchbar />
      <ContactList />
      <Pannel />
    </div>
  );
}

export default App;
