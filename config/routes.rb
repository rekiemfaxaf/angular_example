Rails.application.routes.draw do
  root 'dashboard#index'
  namespace :api do
    resources :events, only: [:index, :create]
  end
end
