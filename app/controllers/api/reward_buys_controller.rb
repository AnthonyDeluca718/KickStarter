class Api::RewardBuysController < ApplicationController
  def index
    # @search = Project.where('lower(title) Like ?', "%#{params[:data].downcase}%")

    if params[:data] == ""
      @search = []
    else
      @search = Project.joins(:user).where("(lower(projects.title) Like ?) or (lower(users.name) Like ?)", "%#{params[:data].downcase}%", "%#{params[:data].downcase}%")
    end

    render "api/search/index"
  end

  def show
    @search = Project.where('category = ?', "#{params[:id]}")
    render "api/search/index"
  end

  def create
    @reward_buy = RewardBuy.new(reward_buy_params)
    @reward_buy.user_id = current_user.id

    unless @reward_buy.save
      render(
        json: ["Invalid request to Back Project"],
        status: 401
      )
    end
  end

  def reward_buy_params
    params.require(:reward_buy).permit(:reward_id)
  end
end
