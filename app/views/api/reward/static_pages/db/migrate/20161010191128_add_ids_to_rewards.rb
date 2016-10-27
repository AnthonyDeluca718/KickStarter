class AddIdsToRewards < ActiveRecord::Migration
  def change
    create_table :reward_buys do |t|
      t.integer :user_id, null: false
      t.integer :reward_id, null: false
    end

    remove_column :rewards, :user_id, :integer
end
