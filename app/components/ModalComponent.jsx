var React=require('react');
var Dialogue = require('Dialogue');
var NavBar = require('NavBar');
var ConditionalResponse = require('ConditionalResponse');
var {Card, CardHeader} = require('material-ui/Card');
var ModalComponent = React.createClass({

  getInitialState: function(){
    return(
      {
        name:'',
        open:false,
        JarvisResponse: [],
        ConditionalResponse:[],
        ResponseJSON:[],
        inc:1
      });
  },
  handleModalOpen: function(){
    this.setState({open: true});
  },

  handleAddNode: function(){
    this.refs.Dialogue.AddNode(this.state.JarvisResponse, this.state.ResponseJSON, this.state.name);
  },

  handleName: function(){
    var NodeName = document.getElementById("Node").value;
    this.setState({name: NodeName});
  },

  Node2: function(DialogueID, node){
      var index = this.state.JarvisResponse.findIndex(function(element){
        return element.id===DialogueID;

      });
      if(index==-1){
        var NewNodeObj={};
        NewNodeObj.id = DialogueID;
        NewNodeObj.response = node;
        this.state.JarvisResponse.push(NewNodeObj);
        this.setState({JarvisResponse: this.state.JarvisResponse });
        console.log(this.state.JarvisResponse);
      }
      else{
        this.state.JarvisResponse[index].response = node;
      }

  },

  createResponse: function(){
      this.state.inc+=1;
      this.setState({inc: this.state.inc});
  },

  handleResponseJSON: function(ResponseID, ResponseJSON){
    console.log(ResponseID+"    "+ ResponseJSON);
    var index = this.state.ResponseJSON.findIndex(function(element){
      return element.ID === ResponseID;
    });
    if(index === -1){
      this.state.ResponseJSON.push(ResponseJSON);
    }
    else{
      this.state.ResponseJSON[index].output = ResponseJSON.output;
    }
    this.setState({ResponseJSON: this.state.ResponseJSON});
    console.log(this.state.ResponseJSON);
  },

	render: function(){
    for(var i=this.state.ConditionalResponse.length+1;i<=this.state.inc;++i){
      this.state.ConditionalResponse.push(<ConditionalResponse id={'b'+i} key={i} valueNode2={this.Node2} addResponseJSON={this.handleResponseJSON} />);
    }
		return (
      <div>
				<NavBar/>
				<div id='myModal' className="modal fade" role="dialog">
				<div className="modal-dialog">

				<div className="modal-content col-md-12 text-center">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal">&times;</button>
						<h3 className="modal-title">Create Node</h3>
					</div>

					<div className="modal-body">
						<h4 style={{textAlign:'left'}}>Name Of Node</h4>
						<div className="input-group">
			<span className="input-group-addon"><i className="glyphicon glyphicon-menu-right"></i></span>
			<input id="Node" type="text" onChange={this.handleName} className="form-control" name="addindent" placeholder="Give Name to Your Workspace"/>
			</div>

			Trigger:
      <br />
			 <span> If : </span>{this.state.open ? <div><Dialogue ref='Dialogue' NodeName={this.state.name} /></div> : null}
						<div>
							<br/>
							<hr/>
							<br/>
							{this.state.ConditionalResponse}
							<br/>
              <Card>
                  <CardHeader
                  title="Create Another Response"
                  onClick={this.createResponse}
                  style={{cursor: 'pointer'}}
                />
          <hr/>
        </Card>
						<button type="Submit" id ="createTrigger" className="btn btn-primary" onClick={this.handleAddNode}>Create</button>
						</div>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>


		<div style={{marginTop:50,marginLeft:50}}>
			<button type="button" className="btn btn-sm btn-primary" onClick={this.handleModalOpen} data-toggle="modal" data-target="#myModal">Create New Dialog</button>
		</div>

			</div>
			);
	}
});

module.exports=ModalComponent;
