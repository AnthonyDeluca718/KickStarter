# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  name                :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  created_at          :datetime
#  updated_at          :datetime
#  photo_url           :string           default("")
#  bio                 :text             default("")
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ActiveRecord::Base

	attr_reader :password

	validates :name, :password_digest, :session_token, presence: true
	validates :name, uniqueness: true
	validates :password, length: {minimum: 6, allow_nil: true}

	after_initialize :ensure_session_token

  has_many :projects

  has_many :rewardBuys,
    class_name: :RewardBuy,
    foreign_key: :user_id

  has_many :rewards,
    through: :rewardBuys,
    source: :reward

  has_attached_file :avatar, default_url: "default_profile.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

	def password= password
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials(name, password)
		user = User.find_by(name: name)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

	def password_is? password
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = new_session_token
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end

  def spent
    buys = self.rewards
    if (buys)
      return buys.inject(0) {|sum,buy| sum+=buy.cost}
    else
      return 0
    end
  end

	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom.base64
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = new_session_token
		end
	end

end
