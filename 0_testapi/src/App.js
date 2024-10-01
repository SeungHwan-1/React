import {useState,useEffect} from "react";
import NewsGrid from "./component/NewsGrid";
import Menu from "./component/Menu";

  
function App() {
  const [items,setItems] = useState([]);
  const [active,setActive] = useState(1);
  const [category,setCategory] = useState("general");

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=b2f485cd2f274a5ba62325da31653420`)
      .then(res=>res.json())
      .then(data=>setItems(data.articles))
  },[category])
  return (
    <div className="App">
      <h1 className="title">News</h1>
       <Menu active={active} setActive={setActive} setCategory={setCategory}/>
       <NewsGrid items={items}/>
    </div>
  )
}

export default App;
 