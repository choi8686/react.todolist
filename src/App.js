import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import Todo from './components/Todo'
import  './App.css'


class App extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      selectedId:0,
      todoList:[{
    name:' 리스트',
    content:[
      {
        value:'박진영'
    }
    ]
    },
    {
    name:'',
    content:[
       
    ]
    }]
  }
  }
 
  onDelete=(e, selected,index)=>{
    let {todoList} = this.state;
      todoList[selected].content.splice(index,1);
      this.setState({
        todoList:todoList
    })
}

  onSelectList = (e, index) => {
    this.setState({
    	selectedId:index
    })
  }
  
  onAddName = (e) =>{
    let {name, selectedId, todoList} = this.state;
    todoList.push({ 
      name:'새 목록',
      content:[{
       value: ''
      }
    ]
     })

    this.setState({
     selectedId : selectedId++,
     name : name,
    
    })
}

onAddTodoElem = (e,selected) =>{
  let { todoList } = this.state;
  todoList[selected].content.push({value:e.target.value});
  todoList[selected].content.value = ""
  

  this.setState({
      todoList:todoList,
  })
  }

  onHandleUpdate = (e, selected,index) => {
    const value = e.target.value;
  let {todoList} = this.state;
  todoList[selected].content[index] = value;
  this.setState({
      todoList: todoList
  })
}

  handleKeyPress = (e,selected) => {
  if(e.key === 'Enter'){
  this.onAddTodoElem(e,selected)
  e.target.value = "" 

}
  }

  render() {
    return (
      <div>
        <Sidebar 
        todoList = {this.state.todoList}
        onSelectList = {this.onSelectList}
        onAddName = {this.onAddName}/> 

        <Todo 
        selectedId = {this.state.selectedId}
        todoList = {this.state.todoList}
        handleKeyPress = {this.handleKeyPress}
        onDelete = {this.onDelete}
        onHandleUpdate={this.onHandleUpdate}
        onAddTodoElem = {this.onAddTodoElem}/>
        </div>
      
    );
  }
}

export default App;
