import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import { addTask, editTask } from "../features/tasks/taskslice"
import {v4 as uuid} from "uuid"
import { useNavigate, useParams } from "react-router-dom"

function TasksForm() {

    const [task, setTask] = useState({
        title: "",
        description: ""
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const tasks = useSelector(state => state.tasks)
    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(params.id){
            dispatch(editTask(task))
        } else {

            dispatch  (addTask({
              ...task,
              id: uuid()
            })
        )
        }
          navigate("/")
    };

    useEffect(() => {
        console.log(params);
        if(params.id) {
            setTask( tasks.find(task => task.id === params.id))
        }
        
    }, [params.id, tasks]); 
    
        return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
        <label htmlFor= "title" className="block mb-2 text-sm font-bold">Task:</label>
        <input 
        name="title"
        type="text" 
        placeholder='title' 
        onChange={handleChange}
        value={task.title}
        className="w-full p-2 rounded-md bg-zinc-500 mb-2"
        />

        <label htmlFor="description" className="block mb-2 text-sm font-bold">description</label>
        <textarea 
        name='description' 
        placeholder='description' 
        onChange={handleChange}
        value={task.description}
        className="w-full p-2 rounded-md bg-zinc-500 mb-2"
        ></textarea>
        <button className="bg-indigo-600 px-2 py-1">Save</button>
    </form>
  )
}

export default TasksForm