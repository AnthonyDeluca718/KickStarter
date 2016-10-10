# == Schema Information
#
# Table name: projects
#
#  id             :integer          not null, primary key
#  title          :string           not null
#  user_id        :integer          not null
#  category_id    :integer
#  target         :integer
#  description    :text             default("")
#  end_date       :date
#  head_photo_url :text             not null
#

class Project < ActiveRecord::Base

  validates :title, :user_id, presence: true

  belongs_to :user


end
