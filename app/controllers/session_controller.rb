class SessionController < ApplicationController

  def index
  end

  def new
    @user = User.new
    @users = User.all
  end


  def create
    @user = User.find_by(email: user_params[:email])
    if @user && @user.authenticate(user_params[:password])
      render status: 200, json: @user.to_json
    end
  end

  def destroy
    reset_session
    redirect_to root_path
  end

  private

  def user_params
    params.require(:user).permit(:user_name, :email, :password)
  end
end
