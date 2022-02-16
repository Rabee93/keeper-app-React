import React from 'react'



const CreateArea = () =>{
  return(
    <div>
      <form>
        <input name="title" placeholder="Title"/>
        <textarea name="content" placeholder="Take a note"/>
        <button> Add note </button>
      </form>
    </div>
  )
}

export default CreateArea;
