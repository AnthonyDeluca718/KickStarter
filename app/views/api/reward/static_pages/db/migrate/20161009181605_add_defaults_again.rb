class AddDefaultsAgain < ActiveRecord::Migration
  def change
    change_column_default(:users, :photo_url, "")
    change_column_default(:users, :bio, "")
  end
end
