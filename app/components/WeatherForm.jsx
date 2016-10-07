var React = require('react');

var WeatherForm = React.createClass ({
	onFormSubmit: function(e) {
		e.preventDefault();

		var location = this.refs.location.value;
	

		if (location.length > 0 ) {
			this.refs.location.value = '';
			this.props.onSearch(location);
		} 

	},
	render() {
		return (
			<div> 
					<form onSubmit={this.onFormSubmit}>
					   <div className="form-group">
					    <label htmlFor="name">City:</label>
						<input id="location" type="text" ref="location" className="form-control" placeholder="Enter your Name"/>
					   </div>
			
						<button className="btn btn-primary">Get Weather</button>
					</form>
				</div>
		);
	}
});

module.exports = WeatherForm;
