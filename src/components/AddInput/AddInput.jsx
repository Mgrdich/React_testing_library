import { useState } from 'react';
import "./AddInput.css";
import { v4 } from "uuid";

function AddInput({
    setTodos, todos
}) {

    const [todo, setTodo] = useState("");

    const addTodo = () => {
        let updatedTodos = [
            ...todos,
            {
                id: v4(),
                task: todo,
                completed: false
            }
        ]
        setTodos(updatedTodos);
        setTodo("");
    };

    return (
        <div className="input-container">
            <input 
                className="input" 
                value={todo} 
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Add a new task here..."
                data-testid="todo_input"
            />
            <button 
                className="add-btn"
                onClick={addTodo}
                data-testid="add_btn"
            >
                Add
            </button>
        </div>
    );
}

export default AddInput
