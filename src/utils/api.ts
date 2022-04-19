 import axios from "axios";

const token = localStorage.getItem("token")?.toString() || false

export default axios.create({
    baseURL: "https://expensetracker-be.herokuapp.com",
    headers:{
        Authorization: token, 
    }
})  