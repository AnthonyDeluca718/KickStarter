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
#  goal           :integer
#  pledged        :integer          default(0)
#

class Project < ActiveRecord::Base

  validates :title, :user_id, :category_id, :target, :description, :end_date, :head_photo_url, :goal,  presence: true

  belongs_to :user

  has_many :rewards

  has_many :rewardBuys,
    through: :rewards,
    source: :rewardBuys



end
