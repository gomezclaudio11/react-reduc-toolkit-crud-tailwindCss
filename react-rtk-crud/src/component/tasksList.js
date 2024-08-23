import { useDispatch, useSelector } from "react-redux"
import { deleteTask } from "../features/tasks/taskslice"
import { Link } from "react-router-dom";

function TasksList() {
    const tasks = useSelector(state => state.tasks)
    console.log(tasks);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        console.log(id);
        dispatch(deleteTask(id))
    }
    return (
        <div className="w-4/6">
            <header className="flex justify-between items-center py-4">
                <h1>Tasks {tasks.length}</h1>
                <Link to="/createTask" className="bg-indigo-600 px-2 py-1 rounded-sm text-sm">
                Create Task
                </Link>
            </header>
                <div className="grid grid-col-3 gap-4">
                {tasks.map(task => 
            <div key= {task.id} className="bg-neutral-800 p-4 rounded-md">
                <header className="flex justify-between">
                <h3>{task.title}</h3>
                <div className="flex gap-x-2">
                <Link to={`/editTask/${task.id}`} 
                className="bg-zinc-600 px-2 py-1 text-xs rounded-md"
                >
                Edit 
                </Link>
                <button onClick={() => handleDelete(task.id)} className="bg-red-500 px-2 py-1 text-xs rounded-md self-center">
                    delette
                    </button>
                </div>
                </header>
                <p>{task.description}</p>
            </div>
        )}
                </div>
    </div>
  )
}

export default TasksList