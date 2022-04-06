import "./App.css";
import { useState,useEffect } from "react";
import Axios from "axios";
import Foodtile from "./FoodTile/Foodtile";

function App() {
  const YOUR_APP_ID = "91dfe1ee";
  const YOUR_APP_KEY = "5bf62d077b5859e55289e55419960598";
  const [query, setQuery] = useState("");
  const [healthlabel,setHealthlabel]=useState("vegetarian");
  const [food, setFood] = useState([]);

  const url=`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthlabel}`;


  const getFoodInfo = async () => {
    var result = await Axios.get(url);
    console.log(result);
    setFood(result.data.hits);
    console.log(result.data.hits);
  };
  useEffect(() => {
    getFoodInfo();
  },[]);
  
  

  const onSubmit = (e) => {
    e.preventDefault(); // this will prevent page from reloading
    getFoodInfo();
  };

  return (
    <div >
      <div className="app">
      <h1 onClick={getFoodInfo} >
        <i style={{color:"blueviolet"}}>🥗 Food Order Hub 🥗</i>
      </h1>
      <form className="app-searchform" onSubmit={onSubmit} >
        <input
          type="text"
          className="app-search"
          placeholder="Type Food Name"
          autoComplete="off"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <select className="app-healthlabel">
          <option value="vegetarian" onClick={()=>{setHealthlabel("vegetarian")}}>Vegetarian</option>
          <option value="vegan" onClick={()=>{setHealthlabel("vegan")}}>Vegan</option>
          <option value="immuno-supportive" onClick={()=>{setHealthlabel("immuno-supportive")}}>Immuno-Supportive</option>
          <option value="low-sugar" onClick={()=>{setHealthlabel("low-sugar")}}>Low-Sugar</option>
          <option value="dairy-free" onClick={()=>{setHealthlabel("dairy-free")}}>Dairy-Free</option>
        </select>
        <input type="submit" className="app-submit" value="Get Food" />
      </form>
      
      <div className="app-food">
        {food.map((recipe)=>{
          return <Foodtile recipe={recipe} />;
        })}
      </div>
    </div>
    </div>
  );
}

export default App;
