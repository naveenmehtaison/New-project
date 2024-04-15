import { createContext } from "react";
import React from "react";
const DataContext = React.createContext({
    DataArr:[],
   edititem:(item)=>{},
    addItem:(item)=>{},
    removeItem:(item)=>{},

})
export default DataContext