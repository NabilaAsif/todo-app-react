import React, { useState } from 'react'
import "./App.css"
import { TodoInput } from './components'
import { TodoList } from './components';

function App() {
  const [todoList,setTodoList]=useState([]);
  const [editItemIndex, setEditItemIndex] = useState();

  let addList = (inputText)=>{
    if(inputText!=='')
      setTodoList([...todoList,inputText]);
  }

  let editItem = (index, item)=>{
    if(item!=='')
      todoList.splice(index,1,item);
      setTodoList(todoList);
      setEditItemIndex(null); 
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...todoList];
    newListTodo.splice(key,1)
    setTodoList([...newListTodo])
  }

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList}/>
        <div>Todo List</div>
        {todoList.map((listItem,i)=>{
          if(i === editItemIndex) {
            return(
              <TodoInput key={i} index={i} addList={addList} item={listItem} editItem={editItem}/>
            )
            } else {
          return (
            <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem} editItem={setEditItemIndex}/>
          )
            }
        })}
      </div>
    </div>
  )
}

export default App