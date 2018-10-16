class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
  end

  def create
    @user = User.find_by(email: user_params[:email])
    #if @user && @user.authenticate(user_params[:password])
      render status: 200, json: @user.to_json
    #end
  end

  def destroy
    session.delete :user_id
  end

  private

  def user_params
    params.require(:user).permit(
      :user_name,
      :password,
      :email
    )
  end

end
