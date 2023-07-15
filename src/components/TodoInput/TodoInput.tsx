import React,{useState} from "react";

function TodoInput(props) {
    const [inputText,setInputText] = useState(props.item ? props.item : '');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }

  return (
     <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
      />
      
      <button className="add-btn" 
      onClick={()=>{
        if(props.item) {
          props.editItem(props.index, inputText)
        } else {
        props.addList(inputText)
        setInputText("")
      }
      }}>Add</button>      
    </div>
  );
}

export default TodoInput;