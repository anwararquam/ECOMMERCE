import { useEffect, useState } from "react";
import axios from "axios";
const ip= "http://localhost:8080";
export default function useCategory(){
     const [categories,setCategories]=useState([]);
     const getCategories=async()=>{
            try {
                const {data}=await axios.get(`${ip}/api/v1/category/get-category`);
                setCategories(data?.category)
            } catch (error) {
                console.log(error)
            }
     }
     useEffect(()=>{
        getCategories();
     },[])
     return categories;
}