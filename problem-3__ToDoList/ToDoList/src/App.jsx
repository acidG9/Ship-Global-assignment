import React from "react";

function App() {
  const [todos, setTodos] = React.useState({
    backlog: ['Task 1', 'Task 2', 'Task 3'],
    todo: ['Task 4', 'Task 5', 'Task 6'],
    ongoing: ['Task 7', 'Task 8'],
    done: ['Task 9', 'Task 10'],
  });

  const moveTodo = (todo, from, to) => {
    setTodos((prevState) => {
      const newFromList = prevState[from].filter((item) => item !== todo);
      const newToList = [...prevState[to], todo];
      return { ...prevState, [from]: newFromList, [to]: newToList };
    });
  };

  const renderCard = (status, label, leftMove, rightMove) => (
    <div className="card">
      <h3>{label}</h3>
      <ul>
        {todos[status].map((todo, index) => (
          <li key={index}>
            {leftMove && (
              <button
                className="move-btn"
                onClick={() => moveTodo(todo, status, leftMove)}
                disabled={!leftMove}
              >
                &lt;
              </button>
            )}
            {todo}
            {rightMove && (
              <button
                className="move-btn"
                onClick={() => moveTodo(todo, status, rightMove)}
                disabled={!rightMove}
              >
                &gt;
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="container">
      {renderCard('backlog', 'Backlog', null, 'todo')}
      {renderCard('todo', 'To Do', 'backlog', 'ongoing')}
      {renderCard('ongoing', 'Ongoing', 'todo', 'done')}
      {renderCard('done', 'Done', 'ongoing', null)}
    </div>
  );
}

export default App
