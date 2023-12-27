import { UserCreate } from "@/interfaces/user.interface";
import axios from "axios";

export const UserModule ={
    register: async function(newUser: UserCreate) {
        return await axios.post(`${import.meta.env.VITE_API_SERVER}/users`, newUser)
    },
}