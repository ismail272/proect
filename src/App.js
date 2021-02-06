import React, {useState} from 'react';
import Header from './Header';



function App(props) {
       const [notes, setNotes] = useState( [
        {
            name: "Встать с дивана",
            done: false
        },
        {
            name: "Покушать",
            done: true
        },
        {
            name: "Лечь снова на диван",
            done: true
        }
    ])

    const [text, setText] = useState("")

    const [check, setCheck] = useState(false)

    const handleCheck = () => {
        setCheck(!check)
    }

    const deleteNotes = (i) => {
        const filter = notes.filter((note,index) => {
            if (index === i) {
                return false
            }
            return true
        })
        setNotes(filter)
    }

    const addNotes = () => {
        setNotes([...notes,{
            name: text,
            done: check
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
            <div>{notes.map((note, index) => {
                return(
                    <div className="note" key={index}>
                        <input type="checkbox" checked={note.done} onChange={() => {}}/>
                        <span>{note.name}</span>
                        <div className="delete"><button onClick={() => deleteNotes(index)}>✕</button></div>
                    </div>
                )
            })}
            </div>
        </div>

    );

}

export default App;