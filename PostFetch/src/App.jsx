import {useEffect, useState, useContext} from "react";
import {getPosts} from "./api/response.js";
import './App.css'
import Card from "./components/card.jsx";

function App() {
  const [posts, setPosts] = useState(null);

useEffect(() => {
  getPosts().then((res) => {
    setPosts(res.items);})
},[])
  return (
  <Card data={posts} />
  )
}

export default App
