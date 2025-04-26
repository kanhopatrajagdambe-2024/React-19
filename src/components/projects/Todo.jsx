import React, { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

export default function Todo() {
  const [inputvalue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState([]);
  const[dateTime,setDateTime] = useState('')

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputvalue || inputvalue === " ") {
      return;
    }
    if (taskList.includes(inputvalue)) {
      return;
    }
    setTaskList((prev) => [...prev, inputvalue]);
    setInputValue(" ");
  };
 

  useEffect(()=>{
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`)
      }, 1000); 

      return ()=>clearInterval(interval)
  }, [])
  const handleDelete = () =>{
    console.log("record deleted")
  }
  return (
    <>
      <header>
        <h2>Todo List</h2>
        <h4>{dateTime}</h4>
      </header>
      <section>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              value={inputvalue}
              className="form-control"
              placeholder="Add you todo task"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={handleInputValue}
            />
            <button type="submit" className="btn btn-primary">
              Add Task
            </button>
          </div>
          <button className="bg-danger">clear All </button>
        </form>
      </section>
      <div className="mt-3">
        {taskList && taskList.length > 0 && (
          <ul className="list-group rounded w-100 p-2 ">
            {taskList.map((task) => {
              return (
                <li
                  key={task}
                  className="m-3 p-1 bg-primary"
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid black",
                    borderRadius: "20px",
                  }}
                >
                  {task}
                  <i
                    className="bi bi-check ms-5 me-4 bg-primary"
                    role="button"
                    onClick={() => {
                      setTaskList(taskList.filter((_, i) => i !== index));
                    }}
                  ></i>
                  <i
                    className="bi bi-trash  bg-primary"
                    role="button"
                    onClick={handleDelete}
                  ></i>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
