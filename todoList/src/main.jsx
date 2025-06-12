import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <div className="flex items-center justify-center min-h-screen">
          <div className="w-[500px] h-[500px] bg-gray-100 rounded-lg flex flex-col items-center justify-center">
              {/*<h1 className="text-2xl font-bold mb-6">TodoList</h1>*/}
              {/*<App />*/}
              {/*<App />*/}
              <App />

              {/*<button className="bg-gray-500 p-1 border rounded text-xs text-white mt-5">Add Task</button>*/}
          </div>
      </div>
  </StrictMode>,
)
