class PagesController < ApplicationController

	def index
		@dishes = Dish.all
	end

	def about
	end

end