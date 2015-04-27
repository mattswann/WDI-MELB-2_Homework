class SessionController < ApplicationController

  # login form
  def new
  end

  # logging in 
  def create
    user = User.authenticate(params[:email], params[:password])

    if user 
      session[:user_id] = user.id
      redirect_to root_path
    else
      redirect_to login_path
    end
  end

  # logging out
  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

end
