import { useState } from 'react'
import Input from "./components/Input"
import List from "./components/List"


function App() {
  const [todo,setToDo]= useState([])

   const addToDoHandler=(items)=>{
setToDo([
  ...todo,
  {
    items,
    time: new Date().toLocaleTimeString()
  }
])
   }
const removeToDo=(id)=>{
    const newState=todo.filter(
      (d,index)=>{
        if(index !== id){
          return true
        }
        else{
          return false
        }
      }
    )
setToDo(newState);
    }
  return (
    <>
    <div className="bg-black h-screen p-3 flex items-center justify center ">
      <div className="bg-[#8EC5FC] mx-auto rounded w-[600px] h-[450px]">
        <Input handler={addToDoHandler}/>
        <List data={todo} removeHandler={removeToDo}/>
      </div>
    </div>
    </>
  );
}

export default App;
