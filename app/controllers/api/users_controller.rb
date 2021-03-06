class Api::UsersController < ApplicationController

	def create
		@user = User.new(user_params)
    if(@user) 
      @user.avatar = File.open('app/assets/images/default_profile.png')
    end

		if @user.save
			login(@user)
			render "api/users/show"
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

  def update
    @user = current_user

    if @user.update(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

	private

	def user_params
		params.require(:user).permit(:name, :password, :bio, :avatar)
	end

end
