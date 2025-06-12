import {useState} from "react";

function App() {
const [count,setCount] = useState(1);
  return (
    <>
        <div>
            {/*<input type="checkbox"/>*/}
            {/*<label htmlFor="" className="pl-2 text-lg text-b">task1</label>*/}
            {/*<svg className="w-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>*/}
            <h1>counter: {count}</h1>
            <h3>value is {count % 2 === 0 ? "even" : "odd"}</h3>
            <button className="bg-gray-500 p-1 border rounded text-xs text-white mt-5" onClick={() => {setCount(count+1);}}>increment</button>
            <button className="bg-gray-500 p-1 border rounded text-xs text-white mt-5" onClick={() => {setCount(count-1);}}>Decrement</button>
        </div>
    </>
  )
}

export default App
