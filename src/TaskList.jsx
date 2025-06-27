import { useContext } from "react";
import { TaskContext } from "./TaskContext";
import TaskItem from "./TaskItem";

function TaskList() {
    const { state } = useContext(TaskContext);
    const { tasks, filter } = state;
    
    const filtered = tasks.filter(task => {
        if (filter === 'All') return true;
        if (filter === 'Pending') return !task.done;
        if (filter === 'Completed') return task.done;
        return true;
    });

    return (
        <div className="mt-4">
            {filtered.length === 0 ? (
                <p className="text-muted text-center">No tasks available</p>
            ) : (
                filtered.map(t => (
                    <TaskItem key={t.id} t={t} />
                ))
            )}
        </div>
    );
}

export default TaskList;