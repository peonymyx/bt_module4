import axios from 'axios';

export const doList ={
    getList:async()=>{
        return await axios.get("https://jsonplaceholder.typicode.com/todos")
    }
}