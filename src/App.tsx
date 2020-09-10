import React, { useState, useEffect } from 'react';
import Notifications, { notify } from 'react-notify-toast';
import './App.css';
import Content from './components/Content';
import AddItem from './components/AddItem';
import Headers from './components/Headers';
import Footer from './components/Footer';
import { ITask } from './interfaces/ITask';

// obtenemos las tareas del LocalStorage
const localTask = localStorage.getItem("localTask");
function App() {

  // define el estado para la lista de tareas
  const [tasks, setTasks] = useState<ITask[]>(localTask ? JSON.parse(localTask) : []);

  // agrega una tarea al listado
  const addTask = (name: string, time: string) => {
    let newTask = name.trim(); // elimina los espacios vacíos al comienzo y final
    if (newTask === "")
      return;
    try {
      setTasks([{ name, done: false, time },...tasks]);
      let myColor = { background: '#2EA44F', text: "#FFFFFF" };
      notify.show("Task created", "custom", 5000, myColor);
    } catch (error) {
      let myColor = { background: 'red', text: "#FFFFFF" };
      notify.show("Error", "custom", 5000, myColor);
    }
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
    // persitencia de las tareas
    localStorage.setItem("localTask", JSON.stringify(tasks));
  }, [tasks])
  return (
    <div className="container">
      <div><Notifications options={{ zIndex: 200, top: '25px' }} /></div>
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
