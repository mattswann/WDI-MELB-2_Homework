class DishesController < ApplicationController

  def index
    @dishes = Dish.all.order(:id)
  end

  def new
    @dish = Dish.new
  end

  def edit
    @dish = Dish.find_by(:id => params[:id])
  end

  def create
    @dish = Dish.new(dish_params)
    @dish.save
    if @dish.save
      redirect_to dishes_path
    else 
      render :new
    end
  end

  def show
    @dish = Dish.find_by(:id => params[:id])
  end

  def update
    update_row = Dish.find(params[:id])
    update_row.update(dish_params)
    redirect_to dishes_path
  end 

  def destroy
    @dish = Dish.find(params[:id])
    @dish.destroy
    redirect_to dishes_path
  end

  def dish_params
    params.require(:dish).permit(:title, :image_url, :photo, :remote_photo_url, :tag_ids => [])
  end
end
