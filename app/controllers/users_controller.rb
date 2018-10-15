class UsersController < ApplicationController
  #before_action :set_user, only: [:show, :edt, :destroy]

  def index
    @users = User.all

    render json: @users
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.valid?
      @user.save
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    else
      flash[:message] = "Please enter a unique username and email."
      redirect_to new_user_url
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(
      :user_name,
      :password,
      :email
    )
  end
end
