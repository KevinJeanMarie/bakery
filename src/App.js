import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button';
import Add from'./components/Add';
import Pay from'./components/Pay';
import List from'./components/List';





class App extends React.Component {
  constructor(){
  super()

  this.state = {
    activeTab: "add",
    items: []
  }
  this.handleButtonClick = this.handleButtonClick.bind(this)
 }

 handleButtonClick(str){
   console.log(str)
   this.setState({activeTab:str})


 }

 addItem(name, price){
   const item = {
     name, price
   }
   this.setState({items: [item, this.state.items]})
   //console.log(name, price)
 }

render(){

  console.log(this.state)
return( 


  
  
  <><div>

    <h1>BAKERY</h1>

    <Button children="Pay"
      handleClick={this.handleButtonClick} />

    <Button children="Add"
      handleClick={this.handleButtonClick} />

    <Button children="List"
      handleClick={this.handleButtonClick} />
    {this.state.activeTab === "Add" && <Add />}
    {this.state.activeTab === "Pay" && <Pay />}
    {this.state.activeTab === "List" && <List />}
  </div>
  
  <Add addItem={this.addItem} /></>

)}}

export default App;
