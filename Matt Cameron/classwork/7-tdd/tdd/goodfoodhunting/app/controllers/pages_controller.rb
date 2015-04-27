class PagesController < ApplicationController

	def index
		@dishes = Dish.all
	end

	def about
	end

	def login

	end

end