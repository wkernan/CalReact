class AppointmentsList extends React.Component {
	render() {
		return(
			<div>
				{this.props.appointments.map((appt) => {
					return(
						<Appointment appointment={appt} key={appt.id} />
					)
				})}
			</div>
		)
	}
}