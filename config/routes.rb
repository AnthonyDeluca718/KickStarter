Rails.application.routes.draw do

  resource :user, only: [:create]
  resource :session, only: [:create, :destroy, :show]

  root "static_pages#root"
end
