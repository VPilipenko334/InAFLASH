Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index, :update] do
      resources :pictures, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :likes, only: [:index, :create, :destroy]
    resources :pictures, only: [:show, :index, :create, :destroy] do
      resources :comments, only: [:index]
    end
    resources :comments, only: [:create, :destroy, :show]
  end
    root to: 'static_pages#root'
end
