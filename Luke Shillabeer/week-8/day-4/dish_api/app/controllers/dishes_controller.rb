class DishesController < ApplicationController

  def index
    sleep 3
    dishes = [
      {name: 'Stupid Typo Pie', stars: 0, img_url: "img/4.gif"},
      {name: 'Backend Sauce', stars: 5, img_url: "img/7.gif"},
      {name: 'Third', stars: 3}
    ]
    render :json => dishes.to_json
  end

end
