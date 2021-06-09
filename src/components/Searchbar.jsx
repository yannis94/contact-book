import React, { useContext, useState } from 'react'
import { contactContext } from '../Context'
import '../style/Searchbar.css'

export default function Searchbar() {

    const [inputValue, setInputValue] = useState("")
    let { pannelObj, changeUrl } = useContext(contactContext)
    let stillTapping = null
    //console.log(test)

    function handleChange(event) {
        setInputValue(event.target.value)
        
    }

    function handleKeyUp(e) {
        //disable refresh if user tapping on keyboard
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
