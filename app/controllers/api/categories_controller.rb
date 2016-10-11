class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all

    render "api/categories/index"
  end

  def show
    
    render "api/search/index"
  end
end
