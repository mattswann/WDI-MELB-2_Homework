class DishesController < ApplicationController

  def new
  end

  def create
    @dish = Dish.new
    @dish.title = params[:title]
    @dish.image_url = params[:image_url]
    @dish.save
    if @dish.save
      redirect_to '/'
    else 
      render :new
    end
  end

  def edit
    @dish = Dish.find_by(:id => params[:id])
  end

  def update
    id = params[:id]
    title = params[:title]
    image_url = params[:image_url]
    update_row = Dish.find(params[:id])
    update_row.update({title: title, image_url: image_url})
    redirect_to("/")
  end 

end
