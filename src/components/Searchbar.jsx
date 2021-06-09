import { useContext, useState } from 'react'
import React from 'react'
import { contactContext } from '../Context'
import '../style/Searchbar.css'

export default function Searchbar() {

    const [inputValue, setInputValue] = useState("")
    let {openPannel} = useContext(contactContext)
    
    //console.log(test)

    function handleChange(event) {
        setInputValue(event.target.value)
        console.log(inputValue)
    }

    function handleClick(e) {
        openPannel(true)
        //addContact()
    }

    return (
        <div className="searchbar">
            <div>
                <input 
                    type="text" 
                    placeholder="Looking for a contact" 
                    value={inputValue}
                    onChange={handleChange} />
                <button onClick={handleClick}>Add contact</button>
            </div>
        </div>
    )
}
