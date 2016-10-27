class AddPledgedToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :pledged, :integer, default: 0
  end
end
