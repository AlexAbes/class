var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

/**
 * Top-level wrapper component; all other views are contained within this.
 */
var Layout = React.createClass({

  render: function() {

    return (
      <div className="App">
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = Layout;
