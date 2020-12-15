import React, { useEffect } from 'react';

const Note = (props) => {



    useEffect(()=>{
        console.log(props);
    },[])


    return (
        <div>
            <div className="w-64 h-64 bg-pink-400 shadow-lg rounded-lg">
                <p className="text-white text-lg font-bold">{props.noteText}</p>
                <p className="text-lg">{props.propName}</p>
            </div>
        </div>
    );
};

export default Note;
