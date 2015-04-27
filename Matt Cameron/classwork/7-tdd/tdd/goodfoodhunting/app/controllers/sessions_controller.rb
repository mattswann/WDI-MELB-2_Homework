class SessionsController < ApplicationController

	# login form
	def new

	end

	# logging in
	def create
		@user = User.where(email: params[:email]).first
		if @user && @user.authenticate(params[:password])
			session[:user_id] = @user.id
			redirect_to '/'
		else
			render :new
		end
	end


	# logging out
	def destroy
		session[:user_id] = nil
		redirect_to '/'
	end

end
