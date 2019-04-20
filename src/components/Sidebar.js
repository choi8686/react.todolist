import React from 'react'


const Sidebar = (props) =>{
    return(
        <div id='sidenav'>{
            <div>
            {props.todoList.map((todo,index) => (
              <button id="listbtn"onClick={(e)=>props.onSelectList(e,index)}>{todo.name} </button>
            ))}
            </div>
            }
           <button id="addlistbtn" onClick={(e)=>props.onAddName()}>목록추가</button>
            </div>
        
    )
}
export default Sidebar