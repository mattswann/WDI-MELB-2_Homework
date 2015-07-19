class DishesController < ApplicationController

	def new
		@dish = Dish.new
	end

	def create
		dish = Dish.new(dish_params)

		if dish.save
			redirect_to '/'
		else
			render :new
		end
	end

	def index
		@dishes = Dish.all
	end

	def show
		@dish = Dish.find(params[:id])
	end

	def edit
		@dish = Dish.find(params[:id])
	end

	def update
		dish = Dish.find(params[:id])
		if dish.update(dish_params)
			redirect_to '/dishes'
		else
			render :edit
		end
	end

	def destroy
		Dish.find(params[:id]).delete
		redirect_to '/dishes'
	end

	def dish_params
		params.require(:dish).permit(:title, :photo, :remote_photo_url, :tag_ids => [])
	end

end