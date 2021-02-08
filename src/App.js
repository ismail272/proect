import React, {useState} from 'react';
import Header from './Header';



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
            <div className="input">
                <input type="text"
                       value={text}
                       onChange={(e) => setText(e.target.value)}
                       placeholder="Введите текст..."/>
                <input type="checkbox" checked={check} onChange={handleCheck}/>
                <button onClick={addNotes}><a href="#">ДОБАВИТЬ</a></button>
            </div>
            <div>
                {notes.map((note, index) => {
                return(
                    <div className="note" key={index}>
                        <input type="checkbox" checked={note.done} onChange={() => {}} onClick={note}/>
                        <span>{note.name}</span>
                        <div className="delete"><button onClick={() => deleteNotes(index)}>✕</button></div>
                    </div>
                 )
            })}
                <div className="input">
                    <button onClick={deleted}>Стереть</button>
                </div>
            </div>
        </div>

    );

}

export default App;