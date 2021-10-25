import React from "react"
import notes from "../notes"


const Note = props => {
return (
<div className = 'note'>
{props.key}
<h1>{props.title}</h1>
<p>{props.content}</p>
</div>

);
}

export default Note;
