Rails.application.routes.draw do
  resources :users, param: :_username
  resources :items
  post 'users/auth', to: 'authentication#authenticate'
end
