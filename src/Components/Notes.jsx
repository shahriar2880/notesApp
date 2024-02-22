import React, { useState } from "react";
import CreateNotes from "./CreateNotes";

const Notes = () => {
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([])
  const saveHandler = () =>{

  }
  return (
    <div className="notes">
      <CreateNotes 
      inputText = {inputText}
      setInputText ={setInputText}
      saveHandler ={saveHandler}
      ></CreateNotes>
    </div>
  );
};

export default Notes;
