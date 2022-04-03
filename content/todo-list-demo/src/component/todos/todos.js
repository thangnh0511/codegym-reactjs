import { useEffect, useState } from "react";

const ToDo = () => {

    const [todo, setTodo] = useState([]);

    const set_complete = (id) => {
        const updated_todo = todo.map(item => {
            if (item.id === id) {
                item.completed = true;
            }
            return item;
        });
        setTodo(updated_todo);
    }

    const get_todos = () => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(data => setTodo(data));
    }

    useEffect(get_todos, []);

  return (
    <>
      <div className="container">
      <ul className="list-group">

        </ul>
        {
            todo && todo.map( item => {
                return  <li className="list-group-item" key={item.id}>
                        <div className="mb-3 form-check">
                            <input 
                                // checked = {item.completed}
                                type="checkbox" 
                                className="form-check-input" 
                                id="{item.id}" 
                                onClick={(e) => {set_complete(e.target.id)}}/>
                            <label className="form-check-label" htmlFor="exampleCheck1">{item.title}</label>
                        </div>
                    </li>
            })
          }
      </div>
    </>
  );
};


export default ToDo;