import { useState } from "react"
import Modal from "./Modal/Modal"
import Showingdata from "./ShowingData"
import classes from './Modal/Modal.module.css'

const HeadingPage=(props)=>{
    const [modalshow, setmodalshow]=useState(false)
    const [edit,setedit]=useState('')
    const handleAddButton=()=>{
        setmodalshow(true)
    }
    const SubmitButton=(j)=>{
        console.log('sumitbutton is breing clicked',j)
        setmodalshow(false)
    }  
    const editfunction=(ele)=>{
        setedit(ele)
        setmodalshow(true)
        


    }

    return(
        <>
            <h1 className={classes.h1}>Bookmark Website</h1>
            <button onClick={handleAddButton}>addBookmark</button>
            {modalshow && <Modal props={edit}  onsubmit={SubmitButton}/>}
            <Showingdata onedit={editfunction}  />
        </>
    ) 
}
export default HeadingPage