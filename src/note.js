import React from 'react';

function Note(props) {
    return (
                <div>
                    {props.notes.map((note, index) => {
                        return (
                            <div className="note" key={index}>
                                <input type="checkbox" checked={note.done} onChange={() => {
                                }} onClick={note}/>
                                <span>{note.name}</span>
                                <div className="delete">
                                    <button onClick={() => props.deleteNotes(index)}>✕</button>
                                </div>
                            </div>
                        )
                    })}
                </div>

    );
}

export default Note;