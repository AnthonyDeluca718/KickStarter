class Api::RewardsController < ApplicationController
  def index
    render "api/search/index"
  end

  def show
    @search = Project.where('category = ?', "#{params[:id]}")
    render "api/search/index"
  end

  def create
    @reward = Reward.new(reward_params)
    @reward.user_id = current_user.id

    unless @reward.save
      render json: @project.errors.full_messages, status: 422
    end
  end
end
