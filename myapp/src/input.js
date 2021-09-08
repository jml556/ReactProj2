import React, {useState} from 'react'

const Input = (props) => {

    const [inputVal, setInputVal] = useState('')

    const submitVal = (e) => {
        e.preventDefault()
        props.functionToPass(inputVal)
        
    }

    return(
        <div>
            <input type="text" value={inputVal} placeholder="Enter some value..." onKeyPress={(e) => setInputVal(e.target.value)}/>
            <input type="submit" onSubmit={(e) => submitVal(e)}/>
        </div>
    )
}

export default Input