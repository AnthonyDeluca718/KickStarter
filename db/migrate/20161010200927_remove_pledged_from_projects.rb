class RemovePledgedFromProjects < ActiveRecord::Migration
  def change
    remove_column :projects, :pledged, :integer
  end
end
