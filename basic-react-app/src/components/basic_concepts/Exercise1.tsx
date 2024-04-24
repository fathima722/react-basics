import React, { Fragment } from "react";

//Class Component
class Exercise1 extends React.Component<{}, { inputValue: string, myName: string }> {

   constructor(props: {}){
    super(props);
    this.state = {
        inputValue: '',
        myName: ''
    }
    this.updateState = this.updateState.bind(this);
    this.updateChange = this.updateChange.bind(this);
   }
   
   updateChange = (event: { target: { value: any; }; }) => {
    this.setState({
        inputValue: event.target.value
    });
    console.log(this.state.inputValue);
   }
   updateState = () => {
        this.setState({
            inputValue: '',
            myName: this.state.inputValue
        })
   }
    render(){
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial",
            width: "fit-content",
            margin: "auto"
          };
        return (<Fragment>
            <div style={mystyle} >
            <label>Name:</label><br />
            <span style={{display:"flex"}}>
            <input type="text" className="form-control" style={{margin: "5px"}} value={this.state.inputValue} onChange={this.updateChange}></input>
            <button type="button" className="btn btn-primary" style={{margin: "5px"}}onClick={this.updateState}>Submit</button></span>
            <p>{this.state.myName} is a good girl</p>
            </div>
            </Fragment>);
    }
}
export default Exercise1;