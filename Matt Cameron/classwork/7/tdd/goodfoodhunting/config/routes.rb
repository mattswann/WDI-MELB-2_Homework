Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  get '/'  => 'dishes#index', :as => :root
  get '/about' => 'pages#about'
  get '/login' => 'sessions#new'
  delete '/logout' => 'sessions#destroy'
  post '/login' => 'sessions#create'

  resources :dishes, :users, :tags


end
