var React = require('react/addons');

module.exports = React.createClass({
	render:function() {
		return (
				<div>
					<h4>{this.props.item.name}</h4>
				</div>
			)
	}
})