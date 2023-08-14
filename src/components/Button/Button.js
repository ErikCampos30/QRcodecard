import React from "react";

export function Button ({titulo, onClick}) {
return (
    <div>
     <button onClick={onClick}>{titulo}</button>   
    </div>
)
}