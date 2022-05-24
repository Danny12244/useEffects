import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [newtodo, setnewTodo] = useState([]);
  const [todo, setTodo] = useState([]);
  const [page, setPage] = useState(1);
  const saveInfo = (page = 1) => {
    fetch("http://localhost:3004/todos", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        text: newtodo,
        iscomplete: false,
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        setnewTodo("");
        setTodo([...todo, d]);
        // console.log(d);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:3004/todos?_page=${page}&_limit=2`)
      .then((r) => r.json())
      .then((d) => {
        setTodo(d);
      });
  }, [page]);
  return (
    <div className="App">
      <input
        value={newtodo}
        onChange={(event) => {
          setnewTodo(event.target.value);
        }}
      />
      <button onClick={saveInfo}>Save</button>
      {todo.map((el) => (
        <div key={el.id}>{el.text}</div>
      ))}
      <h4>Page:{page}</h4>
      <button
        disabled={page == 1}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default App;
