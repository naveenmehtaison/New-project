import { useState } from "react";
import DataContext from '../Store/auth-context';

const DataProvider=(props)=>{
    const[data,setdata]=useState([])
    const [label, setLabel] = useState('');
    const [formdata,setformdata]=useState(false)

    const addItem2=(item)=>{setdata([...data,item])}
    const removeItem2 = (id) => {
        console.log('delete clicked',id)
        const newData = data.filter((ele, index) => index !== id);
        setdata(newData)
    }
    const setLabelValue = (value) => {
        setLabel(value);
    };
    const formdatafunc=(value)=>{
        setformdata(value)
    }
    
    const dataContext={
        items:data,
        addItem:addItem2,
        removeItem:removeItem2,
        label: label, // Include label in the context value
        setLabel: setLabelValue  ,
        setform:formdatafunc ,
        edit:formdata
    }
    return(
        <DataContext.Provider value={dataContext}>
            {props.children}
        </DataContext.Provider>
    )
} 
export default DataProvider