class AddUrlToUsers < ActiveRecord::Migration
  def change
    add_column :users, :photo_url, :string, default: "http://fr.upside-art.com/images/empty_profile.png"
  end
end
