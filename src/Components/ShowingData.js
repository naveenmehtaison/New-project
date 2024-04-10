import { useContext } from "react";
import DataContext from "./Store/auth-context";
const Showingdata =(props)=>{
    const Ctx = useContext(DataContext)
    const deleteFunction=(ele)=>{
        // const newData = Ctx.items.filter((ele, index) => index !== id);
        // console.log(Ctx.items)
        console.log(ele,'ele')
        Ctx.removeItem(ele)
    }
    const EditFunciton=(ele,item)=>{
        console.log('hhh')
        deleteFunction(item)
        props.onclick(ele,item)
        

    }
    return(
        <>
            {
                Ctx.items.map((ele,item)=>(
                    <div>
                        <a href={ele} target="_blank">{ele}</a>
                        <button onClick={()=>deleteFunction(item)}>Delete</button>
                        <button onClick={()=>EditFunciton(ele,item)}>Edit</button>
                    </div>
                ))
            }
        </>
    )
}
export default Showingdata