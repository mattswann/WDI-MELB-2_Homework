class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :dish_id
      t.integer :tag_id
    end
  end
end
