 import axios from "axios";

const token = localStorage.getItem("token")?.toString() || false

export default axios.create({
    baseURL: "https://expensetracker-be.herokuapp.com",
    headers:{
        Authorization: token, 
    }
})  

/* import axios, { HeadersDefaults } from "axios";

const token = localStorage.getItem("token")

interface CommonHeaderProperties extends HeadersDefaults {
    Authorization: string;
}

export default axios.create({
    baseURL: "https://expensetracker-be.herokuapp.com", 
})

axios.defaults.headers = {
    Authorization: token
} as CommonHeaderProperties; 
*/
