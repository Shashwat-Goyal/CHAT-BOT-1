var React = require('react');
var TextField = require('material-ui').TextField;
var Dialogue = require('Dialogue');
var {Card, CardActions, CardHeader, CardText} = require('material-ui/Card');
var FlatButton = require('material-ui').FlatButton;
var TextField = require('material-ui').TextField;
var ResponseTextField = require('ResponseTextField');
var ConditionalResponse = React.createClass({

  getInitialState: function () {
    return({
      text:'',
      clicked:false,
      Response:[],
      inc1:1,
      inc2:1,
      ResponseJSON: {"ID":'',
        output:{
          "text":{
            values:[],
            selection_policy:''
          }

        }
    },
      Dialogue: []
    });
  },

  handleResponse: function(){
    console.log('hi');

  },


headerClick: function(){
  this.setState({clicked: true});
  console.log(this.state.clicked);
},

handleKeyEnter: function(TextID, TextValue){
    if(TextID === this.state.Response.length && TextValue.length!=0){
      this.state.inc1+=1;
    }

    else{
      return false;
    }
    var ID = this.props.id;
    this.setState({inc1: this.state.inc1});

      this.state.ResponseJSON.ID= ID;
      this.state.ResponseJSON.output.text.values.push(TextValue);

    console.log(this.state.ResponseJSON);
  //  console.log("values : "+ this.state.ResponseJSON.output.text.values);
    this.props.addResponseJSON(ID, this.state.ResponseJSON);
},

Node2: function(event){
  var btnID = event.target.id;
  var NewNode = this.refs[btnID].AddNode(btnID);
  this.props.valueNode2(btnID, NewNode);
},

	render: function(){
    for(var i=this.state.Response.length+1;i<=this.state.inc1;++i){
      this.state.Response.push(<ResponseTextField key={i} id={i} onKeyEnter={this.handleKeyEnter} />);
    }
    for(var i= this.state.Dialogue.length+1;i<=this.state.inc2;++i){
      console.log(i);
      this.state.Dialogue.push(<div key={i}><Dialogue ref={this.props.id} /><button className="btn btn-default" id={this.props.id} onClick={this.Node2}> Create Responses </button></div>);
    }
		return (
			<div>
        <br />
        <Card>
          {this.state.clicked ? <div> {this.state.Dialogue} </div>:
            <CardHeader
            title="Add Response Condition"
            onClick={this.headerClick}
            style={{cursor: 'pointer'}}
          />}
    <hr/>
    {this.state.Response}
  </Card>
		</div>
    );
  }
});

module.exports = ConditionalResponse;
