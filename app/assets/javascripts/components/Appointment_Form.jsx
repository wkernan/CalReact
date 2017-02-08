class AppointmentForm extends React.Component {
	handleChange(e) {
		const name = e.target.name;
		const obj = {};
		obj[name] = e.target.value;
		this.props.onUserInput(obj);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onFormSubmit();
	}

	render() {
		return(
			<div>
				<h2>Make a New Appointment</h2>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input name="title" placeholder="Appointment Title" value={this.props.title} onChange={this.handleChange.bind(this)} />
					<input name="appt_time" placeholder="Date and Time" value={this.props.appt_time} onChange={this.handleChange.bind(this)} />
					<input type="submit" value="Make Appointment" /> 
				</form>
			</div>
		)
	}
}