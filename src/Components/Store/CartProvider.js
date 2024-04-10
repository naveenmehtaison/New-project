import { useState } from "react";
import DataContext from '../Store/auth-context';

const DataProvider=(props)=>{
    const[data,setdata]=useState([])

    const addItem2=(item)=>{setdata([...data,item])}
    const removeItem2 = (id) => {
        console.log('delete clicked',id)
        const newData = data.filter((ele, index) => index !== id);
        setdata(newData)
    }
    
    const dataContext={
        items:data,
        addItem:addItem2,
        removeItem:removeItem2
    }
    return(
        <DataContext.Provider value={dataContext}>
            {props.children}
        </DataContext.Provider>
    )
} 
export default DataProvider