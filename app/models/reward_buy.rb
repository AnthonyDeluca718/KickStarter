# == Schema Information
#
# Table name: reward_buys
#
#  id        :integer          not null, primary key
#  user_id   :integer          not null
#  reward_id :integer          not null
#

class RewardBuy < ActiveRecord::Base

  validates :user_id, :reward_id, presence: true

  belongs_to :reward

  belongs_to :user

end
