import { useState } from "react";

export const News = () => {
    const [authur,setAuther] = useState([]);

   const API_Key = '09645ab4ca7346bcb4d94b7c38cbfeb1'

    
   fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_Key}`).then(r=>r.json()).then(data=>
    {   
    console.log(data);
    setAuther(data);   
    
    }
   )
    
}
