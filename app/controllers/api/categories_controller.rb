class Api::CategoriesController < ApplicationController
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
end
