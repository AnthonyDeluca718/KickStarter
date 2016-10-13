# == Schema Information
#
# Table name: projects
#
#  id                      :integer          not null, primary key
#  title                   :string           not null
#  user_id                 :integer          not null
#  category_id             :integer
#  description             :text             default("")
#  end_date                :date
#  head_photo_url          :text             not null
#  goal                    :integer
#  head_image_file_name    :string
#  head_image_content_type :string
#  head_image_file_size    :integer
#  head_image_updated_at   :datetime
#

class Project < ActiveRecord::Base

  validates :title, :user_id, :category_id, :description, :end_date, :goal,  presence: true

  belongs_to :user

  belongs_to :category

  has_many :rewards

  has_many :rewardBuys,
    through: :rewards,
    source: :rewardBuys

  has_attached_file :head_image, default_url: "images/default_title.jpg"
  validates_attachment_content_type :head_image, content_type: /\Aimage\/.*\Z/

  def funding
    rewards = self.rewards.includes(:rewardBuys)

    if (rewards)
      sum = 0
      rewards.each do |reward|
        sum += reward.rewardBuys.length*reward.cost
      end
      return sum
    else
      return 0
    end
  end

end
