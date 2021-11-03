import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




class Add extends React.Component {
    constructor(){
    super()

    this.state = {
        name: "",
        price: 0
    }
this.handleNameChange = this.handleNameChange.bind(this)
this.handlePriceChange = this.handlePriceChange.bind(this)
    }

    handleNameChange(e){
        console.log(e)
        this.setState({name:e.target.value})
  }

  handlePriceChange(e){
      this.setState({price:e.target.value})
  }
render(){
    const {addItem} = this.props
return( 

    <>
    <h1>Add</h1>
    
    <input type="text" onChange={this.handleNameChange} className="form-control" className="col-4" placeholder="qqssqss"></input><br/>
    <input type="range" min={1} max={10} onChange={this.handlePriceChange}></input> 
    <span>{this.state.price}</span>

    <button className="btn btn-danger" onClick={()=>(addItem(this.state.name, this.state.price))}>new button</button>
</>
)}}

export default Add;
