import React, { Component } from "react";
import { Container } from "react-bootstrap";
import cart from "./cart.png"

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1"],
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        {this.renderTags()}</div>
      
    );
  }

  renderTags() {
    
    if (this.state.tags.length === 0) return (<div><img className = "empty" src={cart} alt="CartLogo"/>
    <h4>It seems that your cart is still empty</h4><button className="emptyButton"><a classNamehref="url">Browse Products</a></button></div>)

    return (
      <div>
        <ul>
      {this.state.tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
      </div>
      
    );
  }



  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "success";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h5>Zero</h5> : count;
  }
  
  plus(){
    return(
          <div>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            onClick={this.handleIncrement}
          >
            +
          </button>
          {this.renderTags()}
        </div>
    )
  };
}


export default Counter;



      