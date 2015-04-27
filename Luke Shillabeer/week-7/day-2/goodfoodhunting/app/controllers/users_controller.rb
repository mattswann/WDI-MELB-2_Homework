class UsersController < ApplicationController

  def index
    @users = User.all.order(:id)
  end

  def new
    if logged_in?
      redirect_to root_path
    else
      @user = User.new
    end
  end

  def edit
    @user = User.find_by(:id => params[:id])
  end

  def create
    @user = User.new(user_params)
    @user.save
    if @user.save
      redirect_to users_path, :notice => "Signed up!"
    else
      redirect_to :new
    end
  end

  def show
    @user = User.find_by(:id => params[:id])
  end

  def update
    User.find(params[:id].update(user_params))
    redirect_to users_path
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to users_path
  end

  def user_params
    params.require(:user).permit(:email, :password, :password_confirm)
  end

  private :user_params

end
