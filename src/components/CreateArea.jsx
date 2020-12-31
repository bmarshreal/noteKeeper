import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Fab from "@material-ui/core/Fab";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [clicked, setClick] = useState(false);

  function clickHandler() {
    setClick(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    setClick(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {clicked ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}
        <TextareaAutosize
          aria-label="minimum height"
          rowsMin={3}
          name="content"
          onClick={clickHandler}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={clicked ? 3 : 1}
        />
        <Zoom in={clicked}>
          <Fab onClick={submitNote}>
            <AddCircleIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
