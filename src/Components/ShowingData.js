import { useContext, useEffect, useState } from "react";
import DataContext from "./Store/auth-context";
import classes from './Modal/Modal.module.css'
import axios from "axios";
import { useCallback } from "react";
const Showingdata =(props)=>{
    
    const Ctx = useContext(DataContext)
    const [items,setitems]=useState([])
    
    useEffect(()=>{
    async function fetchdata() {
        console.log('inside showing data')
        try {
            console.log(items,'hii')
            const response = await axios.get('https://crudcrud.com/api/3c86acaf06634369b2aa7ad9ca3d9cb6/booking');
            console.log(response.data)
            setitems(response.data)
            // console.log(items)
            console.log(items,'hii')
        } catch (err) {
            console.log('error', err);
            console.log('inside err')
        }
    }

    fetchdata()
    },[Ctx])

    // const response = await axios.get('https://crudcrud.com/api/5edceea3c27949889d63b6fade7c5058/booking');
    console.log(items)
    async function deleteFunction(ele,item){
        // const newData = Ctx.items.filter((ele, index) => index !== id);
        // console.log(Ctx.items)
        const deleting_axios = await axios.delete(`https://crudcrud.com/api/3c86acaf06634369b2aa7ad9ca3d9cb6/booking/${ele._id}`);
        console.log(ele,'ele')
        Ctx.removeItem(item)
    }
    const EditFunciton=(ele,item)=>{
        console.log(Ctx.setform,'editfuncitonnnnnnnn')
        console.log(ele,'insise eldittt',props.onedit)
        props.onedit(ele)
        console.log(props.onedit);
        deleteFunction(item)
       console.log(Ctx.edit,'hii',Ctx)
       Ctx.setLabel(ele)
       Ctx.setform(true)
        
    }
    return(
        <div >
            {
                items.map((ele,item)=>(
                    <div>
                        <a href={ele} target="_blank">{ele.web}</a>
                        <button onClick={()=>deleteFunction(ele,item)}>Delete</button>
                        <button onClick={()=>EditFunciton(ele,item)}>Edit</button>
                    </div>
                ))
            }
        </div >
    )
}
export default Showingdata