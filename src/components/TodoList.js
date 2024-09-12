import React, { useState } from 'react';
import TodoItem from './TodoItem'; // Ensure this path is correct

function TodoList() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor Appointment',
            completed: true
        },
        {
            id: 2,
            text: 'Meeting at School',
            completed: false
        }
    ]);

    const [text, setText] = useState('');

    function addTask(text) {
        const newTask = {
            id: Date.now(), // Unique ID based on the current time
            text,
            completed: false // New tasks start as not completed
        };
        setTasks([...tasks, newTask]); // Add the new task to the existing tasks
        setText(''); // Clear the input field
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id)); // Remove the task with the given id
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed }; // Toggle the completed status
            } else {
                return task; // Return the task unchanged
            }
        }));
    }

    return (
        <div className="todo-list">
            {tasks.map(task => (
                <TodoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleCompleted={toggleCompleted}
                />
            ))}
            <input
                value={text}
                onChange={e => setText(e.target.value)} // Update text state on input change
            />
            <button onClick={() => addTask(text)}>Add</button>
        </div>
    );
}

export default TodoList;