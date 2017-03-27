var React = require('react');

var Display = React.createClass({
    render:function(){
        var database = this.props.data;
        return(
          <div className="table-responsive">
          <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Descripition</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{database.name}</td>
                    <td>{database.descripition}</td>
                  </tr>
                </tbody>
              </table>
          </div>
        );
    }
});
module.exports = Display;
