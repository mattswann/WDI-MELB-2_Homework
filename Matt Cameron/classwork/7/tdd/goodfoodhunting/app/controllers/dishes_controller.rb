class DishesController < ApplicationController

	def new
	end

	def create
		dish = Dish.new
		dish.title = params[:title]
		dish.image_url = params[:image_url]
		dish.save

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
		dish.title = params[:title]
		dish.image_url = params[:image_url]
		dish.save
		redirect_to '/dishes'
	end

	def destroy
		Dish.find(params[:id]).delete
		redirect_to '/dishes'
	end

end