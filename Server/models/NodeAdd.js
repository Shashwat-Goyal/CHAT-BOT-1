var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var DilogNode = new Schema({
	Node1:String,
	Conditions:Array,
	NodeName:String,
	ResponseJSON:[{'ID':'',
	'output':{
		'text': {
			'selection_policy':'',
			'values':[]
		}
	}}]

});

NodeAdd = mongoose.model('DilogNode', DilogNode );

module.exports = NodeAdd;/*mongoose.model('AddData', AddRegisterSchema );*/
