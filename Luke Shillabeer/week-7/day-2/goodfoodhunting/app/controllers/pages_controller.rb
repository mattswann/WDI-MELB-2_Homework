class PagesController < ApplicationController

  def index
    @dishes = Dish.all.order(:id)
  end

  def about
  end

end
