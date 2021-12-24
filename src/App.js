import React, { useState, useEffect } from "react";
import Card from "./components/card"
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    breakingbadPromise();
  }, []);

  const breakingbadPromise = () => {
    fetch("https://www.breakingbadapi.com/api/characters")
      .then((response) => response.json())
      .then((recivedData) => setData(recivedData));
  };
  console.log(data);

  return (
  <div className="App">
    
      <h1>Breaking Bad Characters</h1>
      <div className="box">
      {data.map((user) => (
       <div>
         <Card src={user.img} name={user.name} birthday={user.birthday} portrayed={user.portrayed}/>
       </div>
      ))}
      </div>
    </div>
  );
}

export default App;