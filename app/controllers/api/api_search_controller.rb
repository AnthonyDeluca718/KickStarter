class Api::SearchController < ApplicationController
  def index
    @search = Project.where('lower(title) Like ?', "%#{params[:data].downcase}%")
    # @search = Project.includes(:user).where("(lower(title) Like ?) or (lower(user.name) Like ?)", "%#{params[:data].downcase}%", "%#{params[:data].downcase}%")

    render "api/search/index"
  end

  def show
    @search = Project.where('category = ?', "#{params[:id]}")
    render "api/search/index"
  end
end
