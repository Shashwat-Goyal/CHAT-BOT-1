var React=require('react');
var NavBar = require('NavBar');
var TextField = require('material-ui').TextField;

var Intents = React.createClass({

	getInitialState: function(){
		return({
				"intents":{
					"intentInput":'',
					"examples":''
				}
		});
	},

	handleIntents: function(){
		var intentInput = this.refs.intentInput.input.value;
		var examples = this.refs.examples.input.value;
		


	},

	render: function(){
		return (

			<div>
				<NavBar/>
				<form>
      <div id='myModal' className="modal fade" role="dialog">
    	<div className="modal-dialog">

      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h3 className="modal-title">Create Intent</h3>
        </div>
        <div className="modal-body">


						<TextField
      			hintText="# Add the Intent Name"
						floatingLabelText="Intent Name"
      			fullWidth={true}
						ref="intentInput"
						required
    				/>

						<TextField
						ref="examples"
      			hintText="Add a user Example"
      			floatingLabelText="User Example"
    /><br />


					<div>
						<br/>
						<br/>
					<button type="button" style={{textAlign:'center'}} className="btn btn-primary" onClick={this.handleIntents}>Add Intent</button>

					</div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>

    </div>
  </div>
</form>
			<div style={{marginTop:50,marginLeft:50}}>
        <button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#myModal" onClick={this.IntentDilog}>Create New Intent</button>
			</div>
      </div>
			);
	}
});

module.exports = Intents;
