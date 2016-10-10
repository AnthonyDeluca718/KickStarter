class CreateRewards < ActiveRecord::Migration
  def change
    create_table :rewards do |t|
      t.integer :cost, null: false
      t.string :title, null: false
      t.integer :limit
      t.text :body, null: false
    end
  end
end
