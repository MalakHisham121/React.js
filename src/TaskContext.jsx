import { Children, createContext, useReducer } from "react";
export const TaskContext = createContext();

const reducer = (state, initial) => {
    if (initial.type === 'add') {
        return {
            ...state, tasks: [...state.tasks, {
                id: Date.now(),
                name: initial.payload,
                done: false,
            },
            ],
        };
    }
    else if (initial.type === 'edit') {
        return {
            ...state,
            tasks: state.tasks.map(task =>
                task.id=== initial.payload.id? {...task,name: initial.payload.name}:task
            ),
        }
            
    }
    else if (initial.type === 'delete') {
        return {
            ...state, tasks: state.tasks.filter(task=>task.id!== initial.payload),
        };
    }
    else if (initial.type === 'complete') {
        return {
            ...state,
            tasks: state.tasks.map(t=>t.id===initial.payload?{...t,done:!t.done}:t),
        };
    }
    else if (initial.type === 'filter') {
        return {
            ...state, filter: initial.payload,
        };
    }
}

export const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        tasks: [],
        filter: 'All',
    });
    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children
            
            }
        </TaskContext.Provider>
    );
}