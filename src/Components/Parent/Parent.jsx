import React ,{ Component } from "react";
import Child from "../Child/Child.jsx";


export default class Parent extends Component {

  state={
    products:[
      {id:1, name: "toshiba c3", price:2000 , category: "mobile", count :50 , onSale: false },
      {id:2, name: "sumsung", price:8000 , category: "mobile", count :19 , onSale: true },
      {id:3, name: "oppo ", price:10000 , category: "mobile", count :40 , onSale: false },
      {id:4, name: "relme", price:2500 , category: "mobile", count :10 , onSale: true },
      {id:5, name: "nokia", price:6000 , category: "mobile", count :20 , onSale: false},
      {id:6, name: "infinxe", price:4000 , category: "mobile", count :10 , onSale: true },
    ]
  }
  deleteProduct =(myId)=>{
    let products = [...this.state.products]
    products = products.filter((product) => product.id !== myId)
    this.setState({products})
  }
  increaseCount=(myIndex)=>{
    let products =[...this.state.products]
    products[myIndex].count++;
    this.setState({products})
  }

  render() {
      return <>
      <div className="container bg-dark">
        <div className="row g-3 d-flex justify-content-ceter">
          <h1 className="text-white">Parent Component</h1>
          {this.state.products.map((product, index)=><Child key={product.id} index={index} increase={this.increaseCount} delete={this.deleteProduct} productInfo={product}/>)}

        </div>
      </div>
      </>
    }
  }
  