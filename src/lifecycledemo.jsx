import React from "react";
 
class LifeCycleDemo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           data: 0
        }
        this.setNewNumber = this.setNewNumber.bind(this)
    }
 
    setNewNumber() {
        this.setState({data: this.state.data + 1})
     }
 
    render() {
        return (
           <div>
              <button onClick = {this.setNewNumber}>INCREMENT</button>
              <Content myNumber = {this.state.data}></Content>
           </div>
        );
     }
}
 
export default LifeCycleDemo;
 
class Content extends React.Component{
    constructor(props)
    {
      super(props);
        console.log('I am in constructor')
    }
    // component is going to be mount
    componentWillMount() {
        console.log('Component WILL MOUNT!')
     }
     // component mounting completed
     componentDidMount() {
        console.log('Component DID MOUNT!')
     }
 
     componentWillReceiveProps(newProps) {    
        console.log('newporps'+ newProps.myNumber);
        console.log('Component WILL RECIEVE PROPS!')
     }
     shouldComponentUpdate(newProps, newState) {
        console.log('newporps'+ newProps.myNumber);
        console.log('newstate' + newState);
        console.log("Calling should comp update");
        return true;
     }
     componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
        console.log('nextprops'+ nextProps.myNumber);
        console.log('nextState'+ nextState);
 
     }
     componentDidUpdate(prevProps, prevState) {
 
        console.log('Component DID UPDATE!')
        console.log('prevprops'+ prevProps.myNumber);
        console.log('prevstate' + prevState);
     }
     componentWillUnmount() {
 
        console.log('Component WILL UNMOUNT!')
     }
    render() {
        console.log("Calling render method.....");
        return (
           <div>
              <h3>{this.props.myNumber}</h3>
           </div>
        );
     }
}
 