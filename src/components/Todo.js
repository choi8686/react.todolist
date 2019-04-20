import React from 'react'


const Todo = (props) => {
    const selected = props.selectedId;
    return(
        <div id='todo'>
        <div id='banner'>
              <h3 id='title'>해야 할 일</h3>
              <div id='subtitlediv'>
              <p id='count' title='count'>{props.todoList[selected].content.length} 개 실행 중</p>
              <button id='addbtn'
                onClick={(e)=>props.onAddTodoElem(e,selected)}
              >추가</button>
              </div>
            </div>
             <div id='todoitems'>
             {
             props.todoList[selected].content.map((todo,index)=>{	
             return(
             <div className='todoItem'>
             <button id="deletebtn"onClick={(e)=>props.onDelete(selected,index)}>완료</button>
                <input className="inputbox" onKeyPress={(e)=>props.handleKeyPress(e,selected)} onChange={(e)=>props.onHandleUpdate(e,selected,index)} value={todo.value}/>
             </div>
             )})
             }
           </div>
           </div>
    )
}
export default Todo