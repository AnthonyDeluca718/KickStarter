class Dropdefault < ActiveRecord::Migration
  def change
    change_column_default(:users, :photo_url, nil)
  end
end
