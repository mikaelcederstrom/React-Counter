import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  // };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  componentDidUpdate(prevProps, prevState){
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    if(prevProps.counter.value !== this.props.counter.value){
      // Ajax call and get new Date from the server
    }
  }

  componentWillUnmount(){
    console.log('Counter - Unmount');
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  // =() => istället för constructor


  render() {
    console.log('Counter - rendered');
    
    return (
      //React.Fragment istället för div om man inte vill ha en separat div runt innehållet.
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button          //   onClick={() => this.handleIncrement({ id: 1 })}
          onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
        {/* button.btn.btn-danger.btn-sm.m-2 */}
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
