Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  get '/'  => 'pages#index'
  get '/about' => 'pages#about'

  get '/dishes' => 'dishes#index'

  get '/dishes/:id' => 'dishes#show'

  # get show form
  get '/dishes/new' => 'dishes#new'

  #post form - create
  post '/dishes' => 'dishes#create'

  # delete dishes
  delete '/dishes/:id' => 'dishes#destroy'

  # show edit form
  get '/dishes/:id/edit' => 'dishes#edit'

  # edit dishes
  put '/dishes/:id' => 'dishes#update'

end
