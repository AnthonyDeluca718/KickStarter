class FixProjects < ActiveRecord::Migration
  def change
    drop_table :projects

    create_table :projects do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.integer :category_id
      t.integer :target
      t.text :description, default: ""
      t.date :end_date, defualt: false
    end
  end
end
