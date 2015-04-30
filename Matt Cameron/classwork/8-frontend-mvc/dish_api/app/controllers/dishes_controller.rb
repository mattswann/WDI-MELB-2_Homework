class	DishesController < ApplicationController


	def home
	end

	def index
		dishes = [{
				name: 'Humble Pie',
				price: 23.99,
				store: 'Safeway',
				image_url: 'http://www.mediapeta.com/peta/Images/Main/Sections/blog/heckleberry_pie.jpg',
				likes: 30

			}, {
				name: 'Mars Bar',
				price: 3.99,
				store: '7-Eleven',
				image_url: 'http://au.mysavings.com/img/link/large/29044.jpg',
				likes: 3
				}]

		render :json => dishes.to_json
	end


end