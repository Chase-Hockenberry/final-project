Rails.application.routes.draw do
  root 'pages#home'
  resources :events, only: [:index]
  resources :employees, only: [:index]
end
