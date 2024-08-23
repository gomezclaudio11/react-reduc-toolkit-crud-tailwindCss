import './App.css';
import TasksForm from "./component/tasksForm.js";
import TasksList from './component/tasksList.js';
import {BrowserRouter, Routes, Route} from "react-router-dom"



function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
  <div className='flex items-center justify-center h-full'>
  <BrowserRouter >
<Routes>
  <Route path='/' element={<TasksList/>}/>
  <Route path='/createTask' element={<TasksForm/>}/>
  <Route path='/editTask/:id' element={<TasksForm/>}/>
    
    </Routes>
    </BrowserRouter>
  </div>
    </div>
  );
}

export default App;
