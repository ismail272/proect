import React from 'react';

function InputText(props) {
    return (
       <div className="input">
                <input type="text"
                       value={props.text}
                       onChange={(e) => props.setText(e.target.value)}
                       placeholder="Введите текст..."/>
             <div className="check"><input type="checkbox" checked={props.check} onChange={props.handleCheck}/></div>
           <button onClick={props.addNotes}>ДОБАВИТЬ</button>
       </div>

    );
}

export default InputText;