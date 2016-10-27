class RemoveTargetFromProjects < ActiveRecord::Migration
  def change
    remove_column :projects, :target, :integer 
  end
end
