import './App.css';
import React, {useState} from 'react';
import Display from './Components/Display';
import data from './data.json';

function App() {
  const[toDoList, setToDoList] = useState(data);

  const[title, setTitle] = useState('');
  const inputsHandler = (e) => {
    setTitle(e.target.value)
  }

  const submit = () =>{
    if(title==='')
    {
      alert("Please Enter Task Name First!")
    }
    else{
      addTask(title);
      setTitle('');

    }
  }

  const addTask = (userInput) =>{
    let data = [...toDoList];
    data = [ ...data, {id: toDoList.length+1, task:userInput, checkbox: false}];
    setToDoList(data);
  }

  const handlerDelete = (id) =>{
    let mapped = toDoList.filter((elem, index) =>{
      //console.log(id+"  "+Number(index));
      let index1=Number(index)+1;
      console.log(id+"  "+elem.id);
      return elem.id !== Number(id);
    })
    setToDoList(mapped);
  }

  const handlerCheckbox = (id) =>{
    console.log(id);
    let mapped = toDoList.map(task =>{
      return task.id === Number(id) ? {...task, checkbox: true } : {...task};
    })
    setToDoList(mapped);
  } 

  return (
    <div className='main'>
    <div className="app">
      <div className="header">
        <div className="todos">
          <span>Todos</span>
        </div>
        <input type="text" className="inputField" placeholder='Title..' onChange={inputsHandler} value={title}/>
        <input type="button" className="button" value="Add" onClick={submit} />
      </div>

      {toDoList.map(value =>(
      <Display todo={value} handlerCheckbox={handlerCheckbox} handlerDelete={handlerDelete} />
      ))}
    </div>
    </div>
  );
}

export default App;
