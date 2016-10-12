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
    unless @reward.save
      render json: @project.errors.full_messages, status: 422
    end

    render json: @reward
  end

  def reward_params
    params.require(:reward).permit(:title, :body, :cost, :project_id)
  end
end
