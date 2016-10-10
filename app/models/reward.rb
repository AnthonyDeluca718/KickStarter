# == Schema Information
#
# Table name: rewards
#
#  id         :integer          not null, primary key
#  cost       :integer          not null
#  title      :string           not null
#  limit      :integer
#  body       :text             not null
#  project_id :integer          not null
#

class Reward < ActiveRecord::Base

  belongs_to :project

  has_many :rewardBuys,
    class_name: :RewardBuy,
    foreign_key: :reward_id

end
