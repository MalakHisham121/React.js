import { useContext } from "react";
import { TaskContext } from "./TaskContext";

function Filter() {
    const { state, dispatch } = useContext(TaskContext);
    const { filter } = state;
    
    const currentFilter = (value) => {
        dispatch({ type: 'filter', payload: value });
    };
    
    return (
        <div className="d-flex justify-content-center gap-2 mb-4">
            {['All', 'Pending', 'Completed'].map(f => (
                <button 
                    key={f} 
                    onClick={() => currentFilter(f)}
                    className={`btn btn-sm ${
                        filter === f ? 'btn-primary' : 'btn-outline-secondary'
                    }`}
                >
                    {f}
                </button> 
            ))}
        </div> 
    );
}

export default Filter;