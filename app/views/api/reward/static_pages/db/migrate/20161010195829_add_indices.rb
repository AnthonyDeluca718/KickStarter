class AddIndices < ActiveRecord::Migration
  def change
    add_index :reward_buys, :user_id
    add_index :reward_buys, :reward_id
    add_index :rewards, :project_id
    add_index :projects, :category_id
    add_index :projects, :user_id
  end
end
