var React=require('react');
var TextField = require('material-ui').TextField;
import IconButton from 'material-ui/IconButton';
import MinusIcon from 'material-ui/svg-icons/content/remove-circle-outline';
var ResponseTextField = React.createClass({

  runScript: function(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
        var tb = document.getElementById(this.props.id);
        if(tb.value.length===0)
        return false;
        console.log(tb.value+"   "+ this.props.id);
        this.props.onKeyEnter(this.props.id, tb.value);
    }
},

	render: function(){
		return (
      <div>
      Response : <TextField

                    hintText = "Type Response" id = {this.props.id}
                    onKeyPress = {this.runScript}
                  /><span><IconButton iconStyle={{width: 72, height: 72, marginLeft: -60}}><span><MinusIcon /> </span></IconButton></span>
      </div>
			);
	}
});

module.exports = ResponseTextField;
