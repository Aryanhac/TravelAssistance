import React from 'react'
import Axios from 'axios'

const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
var options = {
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': '3bd4122070msh7fcda97571fa51dp1c6429jsn2ed4522e9696'
    }
  };
const index = async ()=> {
   try{
         const {data:{data}}= await Axios.get(URL,options);
         return data;
   }catch(error){
       console.log(error);
   }
}

export default index