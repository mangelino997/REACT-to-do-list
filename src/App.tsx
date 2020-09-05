import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/Content';
import AddItem from './components/AddItem';
import Headers from './components/Headers';
import Footer from './components/Footer';

interface ITask {
  name: string,
  done: boolean,
  time: string
}
function App() {
  const task = {
    name: "dddd",
    done: false,
    time: null
  }

  // define el estado para la lista de tareas
  const [tasks, setTasks] = useState<ITask[]>([]);

  // agrega una tarea al listado
  const addTask = (name: string, time: string) => {
    if (!name || name == "")
      return;
    setTasks([...tasks, { name, done: false, time }]);
  }

  // cambia el estado de la tarea
  const completeTask = (i: number) => {
    let newTasks = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTasks(newTasks);
  }

  // elimina una tarea
  const deleteTask = (i: number) => {
    console.log(i);
    let ListTasks = [...tasks];
    ListTasks.splice(i, 1);
    setTasks(ListTasks);
  }

  // resetea 
  const resetTasks = () => {
    setTasks([]);
  }

  useEffect(() => {
    let total = tasks.length;
  }, [tasks])
  return (
    <div className="container">
      <div className="row py-4">
        <div className="col"></div>
        <div className="col-md-5">
          <Headers reset={resetTasks}></Headers>
          <Content listTasks={tasks} done={completeTask} delete={deleteTask}></Content>
          <AddItem addTask={addTask}></AddItem>
        </div>
        <div className="col"></div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
