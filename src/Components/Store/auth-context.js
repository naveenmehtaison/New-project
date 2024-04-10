import { createContext } from "react";
import React from "react";
const DataContext = React.createContext({
    DataArr:[],
    addItem:(item)=>{},
    removeItem:(item)=>{},

})
export default DataContext