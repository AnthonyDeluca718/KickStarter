Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :edit]
    resource :session, only: [:create, :destroy, :show]
    resources :projects, only: [:create, :destroy, :show]
    resources :search, only: [:show, :index]
  end

  root "static_pages#root"
end
