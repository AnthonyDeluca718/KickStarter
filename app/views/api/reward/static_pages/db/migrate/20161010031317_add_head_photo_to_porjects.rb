class AddHeadPhotoToPorjects < ActiveRecord::Migration
  def change
    add_column :projects, :head_photo_url, :text, null: false
  end
end
