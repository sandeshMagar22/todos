
import './App.css';
import Header from './MyComponent/Header';
import { Todos } from './MyComponent/Todos';
import { Footer } from './MyComponent/Footer';
import { AddTodo } from './MyComponent/AddTodo';
import { About } from './MyComponent/About';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }



  const onDelete = (todo) => {
    console.log("I am on Delte of", todo);
    // when button is clicked making the part delted. For that (state Hook)
    setTodos(todos.filter((e) => {
      return e !== todo;
      //jaba ni hami add garchau tyo Local Storage ma ni Save hoss

    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, desc) => {
    console.log("I am add this to", title, desc)
    let sno;
    //jaba todo khali huncha bhaney
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;    //last sno. of todos ma jun add baheyra aauna lai
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo])   //to add todos
    console.log(myTodo);
  }
  //setTodos update the Todos
  const [todos, setTodos] = useState(initTodo);
  //jaba kai change taba tyo apply huna lai tala ko code
  useEffect(() => {
    //Yedi Undefined cha bhany 
    localStorage.setItem("todos", JSON.stringify(todos));  //Null  bhaye pani yah nabahey pani yedi we want to add anyhow then
  }, [todos])
  return ( 
    <> 
    <Router>
      <Header title="My Todos List" searchBar={false} /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
        </Switch> 
      <Footer />
    </Router>
    </>
  );
}

export default App;
