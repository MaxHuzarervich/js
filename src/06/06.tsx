import React, {ChangeEvent} from "react";

export const User = () => {

    const deleteName = () => {
        alert('deleted')
    }
    const saveName = () => {
        alert('saved')
    }
    const nameChanged = () => {
        alert('changed')
    }
    const focusLostHandler = () => {
        alert('lost focus')
    }
    const getInputValue = (e:ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
    }

    return (
        <div>
            Name
            <button onClick={deleteName}>Delete</button>
            <button onClick={saveName}>Save</button>
            <hr/>
            <textarea onChange={nameChanged}>name</textarea>
            <hr/>
            <textarea onBlur={focusLostHandler}>name2</textarea>
            <hr/>
            <input onChange={getInputValue}/>
        </div>
    )
}