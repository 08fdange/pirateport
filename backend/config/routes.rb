Rails.application.routes.draw do
  resources :users, param: :username do
    member do
      resources :items
    end
  end

  resources :items, only: [:index, :show]
  post 'users/auth', to: 'authentication#authenticate'
  post 'users/:username/upload_avatar', to: 'users#upload_avatar'
  post 'users/:username/items/:id/upload_picture', to: 'items#upload_picture'
  

end
