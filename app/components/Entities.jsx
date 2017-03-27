var React=require('react');
var NavBar = require('NavBar');
var TextField = require('material-ui').TextField;


var Entities = React.createClass({

	render: function(){
		return (
			<div style={{marginTop:0}}>
				<div>
					<NavBar/>
				<div id='myModal' className="modal fade" role="dialog">
				<div className="modal-dialog">

				<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal">&times;</button>
						<h3 className="modal-title">Create Entity</h3>
					</div>
					<div className="modal-body">

						<TextField
      			hintText="Add the entity name, for example , Animals"
      			fullWidth={true}
    				/>


						<div>
							<br/>
							<br/>
						<button type="button" style={{textAlign:'center'}} className="btn btn-primary" onSubmit={this.handleEntities}>Add Intent</button>

						</div>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
					</div>
				</div>

			</div>
		</div>
				<div style={{marginTop:50,marginLeft:50}}>
					<button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#myModal" onClick={this.IntentDilog}>Create New Intent</button>
				</div>
				</div>
			</div>
			);
	}
});

module.exports = Entities;
