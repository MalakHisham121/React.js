import { useContext, useState } from "react";
import { TaskContext } from "./TaskContext";

function TaskItem({ t }) {
    const { dispatch } = useContext(TaskContext);
    const [editted, seteditted] = useState(false);
    const [editname, seteditname] = useState(t.name);

    const handletoggle = () => {
        dispatch({ type: 'complete', payload: t.id });
    };

    const handleedit = () => {
        if (editted && editname.trim()) {
            dispatch({ type: 'edit', payload: { id: t.id, name: editname } });
        }
        seteditted(!editted);
    };

    const handleDelete = () => {
        dispatch({ type: 'delete', payload: t.id });
    };

    return (
        <div className={`card mb-2 ${t.done ? 'bg-success-subtle' : 'bg-light'}`}>
            <div className="card-body d-flex align-items-center">
                <input 
                    type="checkbox" 
                    checked={t.done} 
                    onChange={handletoggle} 
                    className="form-check-input me-3" 
                />
                {editted ? (
                    <input 
                        type='text'
                        value={editname}
                        onChange={e => seteditname(e.target.value)}
                        className="form-control flex-grow-1 me-2"
                    />
                ) : (
                    <span className={`flex-grow-1 ${t.done ? 'text-decoration-line-through text-muted' : ''}`}>
                        {t.name}
                    </span>   
                )}
                <button onClick={handleedit} className="btn btn-outline-primary btn-sm me-2">
                    <i className="bi bi-pencil"></i>
                </button>
                <button onClick={handleDelete} className="btn btn-outline-danger btn-sm">
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        </div>
    );
}

export default TaskItem;