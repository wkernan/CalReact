class Appointments extends React.Component {
	constructor(props) {
		super(props); 

		this.state = {
			appointments: this.props.appointments,
			title: '',
			appt_time: ''
		}
	}

	handleUserInput(obj) {
		this.setState(obj);
	}

	handleFormSubmit() {
    const appointment = {title: this.state.title, appt_time: this.state.appt_time};
    $.post('/appointments',
            {appointment: appointment})
          .done(function(data) {
            this.addNewAppointment(data);
          }.bind(this));
	}

	addNewAppointment(appointment) {
		const appointments = React.addons.update(this.state.appointments, { $push: [appointment]});
		this.setState({appointments: appointments});
	}

	render() {
		return(
			<div>
				<AppointmentForm input_title={this.state.title} input_appt_time={this.state.appt_time} onUserInput={this.handleUserInput.bind(this)} onFormSubmit={this.handleFormSubmit.bind(this)} />
				<AppointmentsList appointments={this.props.appointments} />
			</div>
		)
	}
}