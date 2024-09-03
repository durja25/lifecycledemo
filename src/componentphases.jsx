import React from "react";

export default class ComponentPhases extends React.Component {
// 	constructor(props) {
//         // When component is created it will first call constructor
//         console.log("I am in constructor");
// 		super(props);
// 		this.state = {
// 			favoriteColor: "red",
// 		};
// 	}
// // static getDerivedStateFromProps(props, state) {
// //     // called before render
// //     // 3 . After component did mount
// //     console.log("I am in getDerivedStateFromProps");
// //     return {favoriteColor:props.favcol};
// // }

//     componentDidMount() {
//         // 2 . After constructor is called
//         // called before render
//         setTimeout(() => this.setState({ favoriteColor: "gray" }), 5000);
//         console.log("I am in componentDidMount");

//     }

// 1.
constructor(props) {
    super(props);
    console.log('I am in constructor');
    this.state = {favoritecolor: "red"};
  }

//   2  DOM is Ready
// componentDidMount() {
//     console.log ('I am in did mount method');
//     // setTimeout(() => {
//     //   this.setState({favoritecolor: "blue"})
//     // }, 2000)

//     document.getElementById("h1").style.color ='green';
//   }

//   //3  Yellows has been received from props - 11th - this method will be called when just before rendering
//   static getDerivedStateFromProps(props, state) {
//     console.log('I am in Derived State from Prop');
//   return {favoritecolor: props.favcol };
// }
//    //4.
//   shouldComponentUpdate() {
//     return true;
//   }
   //3.
   changeColor = () => {
    this.setState({favoritecolor: "gray"});
  }
//5. button clicked
getSnapshotBeforeUpdate(prevProps, prevState) {
// this.setState({favoritecolor: 'cyan'});
    console.log("changing to cyan color");
    document.getElementById("h1").style.color ='cyan';
}
	render() {
        // lastly render will be called
        var myColor= this.state.favoriteColor;
		return (
			<div id="div1">
				<h1 style={{ color: myColor }} id="h1">
					I like {this.state.favoriteColor}
				</h1>
				<button
					type="button"
					onClick={this.changeColor}
				>
					Change color
				</button>
			</div>
		);
	}
}
