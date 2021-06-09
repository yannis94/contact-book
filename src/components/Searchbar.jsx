import React, { useContext, useState } from 'react'
import { contactContext } from '../Context'
import '../style/Searchbar.css'

export default function Searchbar() {

    const [inputValue, setInputValue] = useState("")
    let { pannelObj, changeUrl } = useContext(contactContext)
    let stillTapping = null

    function handleChange(event) {
        setInputValue(event.target.value)
        
    }

    function handleKeyUp(e) {
        //till user tapping on keyboard > no request
        clearTimeout(stillTapping)

        stillTapping = setTimeout(() => {
            changeUrl(e.target.value)
        }, 1000);
    }

    function handleClick(e) {
        pannelObj["content"] = {}
        pannelObj.openPannel(true)
    }

    return (
        <div className="searchbar">
            <div>
                <input 
                    type="text" 
                    placeholder="Looking for a contact" 
                    value={inputValue}
                    onChange={handleChange} 
                    onKeyUp={handleKeyUp}/>
                <button onClick={handleClick}>Add contact</button>
            </div>
        </div>
    )
}
