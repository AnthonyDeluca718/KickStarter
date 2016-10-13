Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :projects, only: [:create, :destroy, :show]
    resources :search, only: [:show, :index]
    resources :categories, only: [:index, :show]
    resources :reward_buys, only: [:create]
    resources :rewards, only: [:create]
  end

  root "static_pages#root"
end
