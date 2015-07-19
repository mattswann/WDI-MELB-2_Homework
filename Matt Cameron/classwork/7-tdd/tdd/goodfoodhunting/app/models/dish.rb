class Dish < ActiveRecord::Base
	has_many :taggings
	has_many :tags, :through => :taggings
	has_many :likes

	mount_uploader :photo, PhotoUploader

	def self.top_three
		# something like this...
		dishes = Dish.joins(:likes).group(:title, :dish_id).order(:title).limit(3)
		# not working just yet
	end

	def like_count
		likes.count
	end
end
