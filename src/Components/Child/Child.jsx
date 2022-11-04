import React,{ Component } from "react";


export default class Child extends Component {
    render() {
      let {id , name,price ,category, count , onSale } =this.props.productInfo;
      return <>
        <div className="col-md-4">
          <div className="product m-2 p-3 mb-5 bg-white position-relative">
            <h6>id :{id}</h6>
            <h6>name :{name}</h6>
            <h6 className={price>5000?"text-danger":""}>price :{price}</h6>
            <h6>category :{category}</h6>
            <h6>count :{count}</h6>
            {onSale?<div className="position-absolute p-2 end-0 top-0 bg-danger text-white d-flex justify-content-center align-items-center">Sale</div>:""}    
            <button onClick={()=>this.props.increase(this.props.index)} className="btn btn-outline-success w-100 mb-2">incresse</button>
            <button onClick={()=>this.props.delete(id)} className="btn btn-outline-danger w-100">Delete</button>
          </div>
        </div>
      </>
    }
}
  