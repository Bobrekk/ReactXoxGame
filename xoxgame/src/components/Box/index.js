import React, { useState } from 'react'

function Box(props) {

    const [text, setText] = useState("")
    function toogleText(){
        if(text === ""){
            setText(props.currentState)
            props.changeTurn(props.row, props.col)
        }
    }
    
    return (
        <div className='box' onClick={toogleText}>{text}</div>
    )
}

export default Box;
