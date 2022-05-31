import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [newtodo, setnewTodo] = useState([]);
  const [totalCount, setTotalCount] = useState([]);
  const [limit, setLimit] = useState(5)
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

  // useEffect(() => {
  //   fetch(`http://localhost:3004/todos?_page=${page}&_limit=2`)
  //     .then((r) => r.json())
  //     .then((d) => {
  //       setTodo(d);
  //     });
  // }, [page]);

  useEffect(()=>{
    const getTodo = async () =>{
      let r = await axios.get(`https://localhost:8080/todos?_page=${page}&_limit=${limit}`);
      console.log(r);
      setTodo(r.data);
      setTotalCount(Number(r.headers["x-total-count"]));
    };
    getTodo();
  },[page])
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
      disabled={totalCount < page*5}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
      <select onChange={(e) =>setLimit((Number(e.target.value)))}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option> 
         {/* //<option value="25"></option> */}
      </select>
    </div>
  );
}

// export default App;
