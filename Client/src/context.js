import React,{createContext,useEffect,useState} from 'react';
import axios from 'axios';
import {AxiosResponse} from 'axios';

export const myContext = createContext({});
export default function Context(props){
    const [userObject,setUserObject] = useState('');
    useEffect(()=>{
        fetch("http://localhost:8080/getuser")
        .then((res)=>{
            console.log(res);
            if(res.data)
            {
                setUserObject(res.data);
            }
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    return (
        <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
    )

}
