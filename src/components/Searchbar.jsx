import { useContext, useState } from 'react'
import React from 'react'
import '../style/Searchbar.css'

export default function Searchbar() {

    const [inputValue, setInputValue] = useState("")
    

    function handleChange(event) {
        setInputValue(event.target.value)
        console.log(inputValue)
    }

    return (
        <div className="searchbar">
            <div>
                <input 
                    type="text" 
                    placeholder="Looking for a contact" 
                    value={inputValue}
                    onChange={handleChange} />
                <button>Add contact</button>
            </div>
        </div>
    )
}
