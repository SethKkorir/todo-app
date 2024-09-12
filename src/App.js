import React from 'react';
import TodoList from './components/TodoList'; // Correct import path

function App() {
    return (
        <div className="App">
            <h1>My Todo List</h1>
            <TodoList />
        </div>
    );
}

export default App;