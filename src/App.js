import React, {useState} from 'react';
import Header from './Header';
import InputText from "./inputText";
import Note from "./note";
import ButtonClean from "./buttonClean";



function App(props) {

    const [notes, setNotes] = useState( [
        {
            name: "Встать с дивана",
            done: false,
            favorite: false
        },
        {
            name: "Покушать",
            done: false,
            favorite: false
        },
        {
            name: "Лечь снова на диван",
            done: false,
            favorite: false
        }
    ])

    const [text, setText] = useState("")

    const [check, setCheck] = useState(false)



    const handleCheck = () => {
        setCheck(!check)
    }



    const deleteNotes = (i) => {
        const filtered = notes.filter((note,index) => {
            if (index === i) {
                return false
            }
            return true
        })
        setNotes(filtered)
    }

    const deleted = (i) => {
           const filter = notes.filter((note) => {
              return false
           })
        setNotes(filter)
        setText("")
        setCheck(false)
    }

    const addNotes = () => {
        setNotes([...notes, {
            name: text,
            done: check,
            favorite: check
        }
            ])
        setText("")
        setCheck(false)}


    return (
        <div className="app">
            <Header />
            <InputText text={text} setText={setText} check={check} handleCheck={handleCheck} addNotes={addNotes} setNotes={setNotes} />
            <Note notes={notes} deleteNotes={deleteNotes} />
            <ButtonClean deleted={deleted} />
        </div>

    );

}

export default App;