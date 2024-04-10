import { createPortal } from "react-dom"
import ReactDom from 'react-dom'
import { useContext } from 'react'
import DataContext from "../Store/auth-context"



const Modal3=(props)=>{
    const Ctx = useContext(DataContext)
    const HanldeSubmit=()=>{
        console.log(Ctx)
        const j = document.getElementById('Name').value
        console.log(j)
        Ctx.addItem(j)
        props.onsubmit()

    }
    return(
        <>
            <input type="url" id="Name" required />
            <button type="submit" onClick={HanldeSubmit}> Submit</button>
        </>
    )

}

const Modal=(props)=>{
    const Portal = document.getElementById('portal')
    const HanldeSubmit=()=>{
        props.onsubmit()
    }
    return(
        <>
        {ReactDom.createPortal(<Modal3 onsubmit={HanldeSubmit}></Modal3>,Portal)}
        {/* <Modal2/> */}
        </>
    )
}
export default Modal