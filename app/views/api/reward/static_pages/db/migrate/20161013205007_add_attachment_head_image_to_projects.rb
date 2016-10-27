class AddAttachmentHeadImageToProjects < ActiveRecord::Migration
  def self.up
    change_table :projects do |t|
      t.attachment :head_image
    end
  end

  def self.down
    remove_attachment :projects, :head_image
  end
end
