class Appointments extends React.Component {
	constructor(props) {
		super(props); 

		this.state = {
			appointments: this.props.appointments,
			title: '',
			appt_time: ''
		}

		this.handleUserInput = this.handleUserInput.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleUserInput(obj) {
		this.setState(obj);
	}

	handleFormSubmit() {
		let appointment = {title: this.state.title, appt_time: this.state.appt_time};
		$.post('/appointments', {appointment: appointment})
			.done((data) => {
				this.addNewAppointment(data);
			})
	}

	addNewAppointment(appointment) {
		let appointments = React.addons.update(this.state.appointments, { $push: [appointment]});
		this.setState({appointments: appointments});
	}

	render() {
		return(
			<div>
				<AppointmentForm input_title={this.state.title} input_appt_time={this.state.appt_time} onUserInput={this.handleUserInput} onFormSubmit={this.handleFormSubmit} />
				<AppointmentsList appointments={this.props.appointments} />
			</div>
		)
	}
}