class RemoveHeadPhotoUrlFromProjects < ActiveRecord::Migration
  def change
    remove_column :projects, :head_photo_url, :string 
  end
end
