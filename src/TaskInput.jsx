import { useContext, useState } from "react";
import { TaskContext } from "./TaskContext";

function TaskInput() {
    const { dispatch } = useContext(TaskContext);
    const [taskname, setname] = useState('');
    
    const AddTask = () => {
        if (taskname.trim()) {
            dispatch({ type: "add", payload: taskname });
            setname('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            AddTask();
        }
    };

    return (
        <div className="input-group mb-4">
            <input 
                type="text" 
                value={taskname} 
                onChange={e => setname(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Add new task"
                className="form-control"
            />
            <button onClick={AddTask} className="btn btn-primary">
                Add Task
            </button>
        </div>
    );
}

export default TaskInput;