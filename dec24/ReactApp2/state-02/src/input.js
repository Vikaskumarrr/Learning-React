import React from "react";
import { useState } from "react";


export const Input = ()=>{ 
    const [name , setName] = useState( "abcd")
    
    const onChangeName = (event)=>{ 
        const newValue = event.target.value ; 
        console.log(newValue)
        setName(newValue)
    }

    return (

        <div>
            <input placeholder="name" value={name} onChange={onChangeName}/>
        </div>
    )
}

// React controlled inputs 