import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Note from '../components/note';



const HomePage = ()=>{
    const feature = useSelector(e=>e.studentStore.features)
    const [name,setName] = useState("Home component name")
    const objData = {
        name:"Useranem",
        profile:"flsadf",
        age:20
    }

    const onclick = ()=>{
        setName(Date().toLocaleString());
        console.log(feature)
    }

    useEffect(()=>{
        console.log("Mounted ");
    },[])

    useEffect(()=>{
        console.log("Name Chnage ");
    },[name])

    return (

            <div className="">
                <h1>HELLO WORLD FROM HOME COMPONENT</h1>
                <p className="">{name}</p>
                <button onClick = {onclick}>CLICK ME</button>

                <div className="flex justify-center py-10">
                <Note obj={objData} noteText=" this the note message " propName={name}/>
                </div>
            </div>
            
    
    )
}

export default HomePage;