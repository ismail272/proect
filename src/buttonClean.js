import React from 'react';

function ButtonClean(props) {
    return (
        <div>
            <div className="input">
                <button onClick={props.deleted}>Стереть</button>
            </div>
        </div>
    );
}

export default ButtonClean;