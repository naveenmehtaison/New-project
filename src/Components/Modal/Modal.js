import { createPortal } from "react-dom"
import ReactDom from 'react-dom'
import { useContext, useState } from 'react'
import DataContext from "../Store/auth-context"
import { useRef } from "react"
import classes from './Modal.module.css'

import axios from 'axios';

const Modal3=(props)=>{
    
    const [formdata,setdata]=useState('')
    const Ctx = useContext(DataContext)
    async function HanldeSubmit(event){
        event.preventDefault()
        try{   
            console.log('try')
            const obj={web:Ctx.label} 
            const Post = await axios.post('https://crudcrud.com/api/3c86acaf06634369b2aa7ad9ca3d9cb6/booking', obj);
            obj._id=Post.data._id
            console.log(Ctx)
            Ctx.addItem(Ctx.label)
            Ctx.setLabel('')
            props.onsubmit()
            console.log(Ctx.setform)
            Ctx.setform(false)
        }
        catch{
            console.log('error ocured')
        }
    }
    return(
        <>
            <input type="url"  value={Ctx.label} onChange={(e)=>{Ctx.setLabel(e.target.value)}} id="Name" required />
            {!Ctx.edit && <button type="submit" onClick={HanldeSubmit}> Submit</button>}
            {Ctx.edit && <button type="submit" onClick={HanldeSubmit}> Submit Edit</button>}
        </>
    )

}

const Modal=(props)=>{
    const Portal = document.getElementById('portal')
    const HanldeSubmit=()=>{
        props.onsubmit()
    }
    const editHandler=(ele)=>{
        console.log('editmodal')
        props.onedit()
    }
    return(
        <>
        {ReactDom.createPortal(<Modal3 props ={props.props} onedit={(ele)=>editHandler} onsubmit={HanldeSubmit}></Modal3>,Portal)}
        {/* <Modal2/> */}
        </>
    )
}
export default Modal