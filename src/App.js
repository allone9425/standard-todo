import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([
    ({
      id: 1,
      title: "리액트 투두",
      contents: "투두 만들기",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 투두22",
      contents: "투두 만들기2",
      isDone: true,
    },
    {
      id: 3,
      title: "리액트 투두33",
      contents: "투두 만들기3",
      isDone: false,
    }),
  ]);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const addBtn = () => {
    const newTodo = {
      id: todo.length + 1,
      title: title,
      contents: text,
      isDone: false,
    };
    setTodo([...todo, newTodo]);
  };

  const deleteBtn = (id) => {
    const newTodo = todo.filter(function (todo) {
      return todo.id !== id;
    });
    setTodo(newTodo);
  };

  const workingTodo = todo.filter(function (item) {
    return !item.isDone;
  });

  const doneTodo = todo.filter(function (item) {
    return item.isDone;
  });

  return (
    <div className="App">
      <header>To do List</header>
      <main>
        제목{" "}
        <input
          type="text"
          value={title}
          onChange={function (event) {
            setTitle(event.target.value);
          }}
        />
        <br />
        내용{" "}
        <input
          type="text"
          value={text}
          onChange={function (event) {
            setText(event.target.value);
          }}
        />
        <br />
        <button onClick={addBtn}>추가하기</button>
        <section>
          <h3>Working</h3>
          {workingTodo.map(function (item) {
            return (
              <div>
                <h4>{item.title}</h4>
                <p>{item.contents}</p>
                <button onClick={() => deleteBtn(item.id)}>삭제</button>
                <button>완료</button>
              </div>
            );
          })}
        </section>
        <section>
          <h3>Done</h3>
          {doneTodo.map(function (item) {
            return (
              <div>
                <h4>{item.title}</h4>
                <p>{item.contents}</p>
                <button onClick={() => deleteBtn(item.id)}>삭제</button>
                <button>취소</button>
              </div>
            );
          })}
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
