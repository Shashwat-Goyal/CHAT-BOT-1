var React=require('react');
var AutoComplete = require('material-ui').AutoComplete;
var TextField = require('material-ui').TextField;
var DialogueButtonComponent = require('DialogueButtonComponent');
var axios = require('axios');

var Dialogue = React.createClass({

		getInitialState: function () {
				return(
					{
					Node:'',
					searchText:'',
					inc:1,
					dialogueButtonComponent:[],
					fwdString: [],
					conditions: []
				}
				);
		},


		AddNode: function(check, RespJSON, NodeName){
			if(typeof check === 'string'){
			var DataString='';
			for(var i=0,j=0;i<this.state.fwdString.length;++i,++j){
				if(i===this.state.fwdString.length-1){
					DataString+=this.state.fwdString[i].value;
				}
				else{
				DataString+=this.state.fwdString[i].value+" "+this.state.conditions[j].condition+" ";
			}
		}
		return DataString;
	}
	else{
		if(check.length===0){
			alert("Please enter the Response conditions");
			return false;
		}
		var DataString='';
		for(var i=0,j=0;i<this.state.fwdString.length;++i,++j){
			if(i===this.state.fwdString.length-1){
				DataString+=this.state.fwdString[i].value;
			}
			else{
			DataString+=this.state.fwdString[i].value+" "+this.state.conditions[j].condition+" ";
		}
	}
		console.log(RespJSON);
		var jsonObj={};
		jsonObj.Node1 = DataString;
		jsonObj.Conditions =[];
		jsonObj.ResponseJSON = RespJSON;
		jsonObj.NodeName = NodeName;
		console.log(check);
		for(var i=0;i<check.length;++i){
			jsonObj.Conditions.push(check[i].response);
		}
		console.log(jsonObj);
	console.log(jsonObj.ResponseJSON);
		//console.log("My resp : "+jsonObj);
	// 	$.ajax({
	// 	   url: 'http://localhost:8080/nodeadd/NodeAdd',
	// 		 type:'POST',
	// 		 data:jsonObj,
	// 		 async: false,
	// 		 cache: false,
	// 		 success: function(data1) {
	// 			 console.log(data1);
	// 		 }.bind(this),
	// 		 error: function(xhr, status, err) {
	// 			 console.error(this.state.url, status, err.toString());
	// 		 }.bind(this)
	// 	 });
	//  }
	// 	},

		axios.post('http://localhost:8080/nodeadd/NodeAdd', jsonObj

	)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
},

		//HANDLE MINUS BUTTON
handleUpdateInput: function(obj){
	var index = this.state.fwdString.findIndex(function(element){
		return element.id===obj.id;
	});
	if(index===-1){
		this.state.fwdString.push(obj);
		this.setState({fwdString: this.state.fwdString});
	}
	else{
		this.state.fwdString[index].value=obj.value;
		this.setState({fwdString: this.state.fwdString});
	}
	console.log(this.state.conditions);
},

handleMinusClick: function(tagID){
	var index = this.state.dialogueButtonComponent.findIndex(function(element){
		return element.props.id===tagID;
	});
	if(index!=-1){
		this.state.dialogueButtonComponent.splice(index, 1);
	}
	index = this.state.fwdString.findIndex(function(element){
		return element.id===tagID;
	});
	if(index!=-1){
		this.state.fwdString.splice(index, 1);
	}

	index = this.state.conditions.findIndex(function(element){
		return element.id===tagID;
	});
	if(index!=-1){
		this.state.conditions.splice(index, 1);
	}

	this.setState({dialogueButtonComponent: this.state.dialogueButtonComponent, fwdString: this.state.fwdString, conditions: this.state.conditions});
	let inc = this.state.inc;
	if(inc!==1){
	inc -=1;
	this.setState({inc:inc});
	}
},

	//HANDLE PLUS BUTTON

handlePlusClick: function(textValue){
	/*if(this.state.inc!=0)
	{
	this.state.fwdString.push(textValue);
	}

	this.setState({fwdString: this.state.fwdString});*/
	let inc = this.state.inc;
	inc += 1;
  this.setState({inc:inc})

},

saveConditions: function(condition, id){
		var conditionObj = {};
		conditionObj.id = id;
		conditionObj.condition = condition;
		var index = this.state.conditions.findIndex(function(element){
			return element.id===id;
		});
		if(index===-1){
		this.state.conditions.push(conditionObj);
	}
	else{
		this.state.conditions[index].condition = condition;
	}
},
			//RENDER FUNCTION

	render: function(){

	for(var i=this.state.dialogueButtonComponent.length+1;i<=this.state.inc;i++)
	{
		this.state.dialogueButtonComponent.push(<DialogueButtonComponent id={'a'+i} key = {i} onHandlePlusClick={this.handlePlusClick} onHandleMinusClick={this.handleMinusClick} onHandleUpdateInput={this.handleUpdateInput} onSaveConditions={this.saveConditions}></DialogueButtonComponent>);
	}

			return (
			<div>
				{this.state.dialogueButtonComponent}
						<div>
							<br/>

						</div>
			</div>
			);
	}
});

module.exports = Dialogue;
