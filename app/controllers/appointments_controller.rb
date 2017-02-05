class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.order('appt_time ASC')
    @appointment = Appointment.new
  end

  def create 
		@appointment = Appointment.new(appointment_params)

		if @appoinment.save
			render json: @appointment
		else
			render json: @appoinment.errors, status: :unprocessable_entity
		end
  end

  private
  def appointment_params
		params.require(:appointment).permit(:title, :appt_time)
  end
end