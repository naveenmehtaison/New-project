import { useState } from "react"
import Modal from "./Modal/Modal"
import Showingdata from "./ShowingData"

const HeadingPage=(props)=>{
    const [modalshow, setmodalshow]=useState(false)
    const handleAddButton=()=>{
        setmodalshow(true)
    }
    const SubmitButton=()=>{
        console.log('sumitbutton is breing clicked')
        setmodalshow(false)
    }
    const handleedit=(ele,item)=>{
        setmodalshow(true)
        // const j = document.getElementById('Name').value
        // console.log(j)
    }
    
    return(
        <>
            <h1>Bookmark Website</h1>
            <button onClick={handleAddButton}>addBookmark</button>
            {modalshow && <Modal onsubmit={SubmitButton}/>}
            <Showingdata  onclick={(ele,item)=>handleedit()}></Showingdata>
        </>
    ) 
}
export default HeadingPage