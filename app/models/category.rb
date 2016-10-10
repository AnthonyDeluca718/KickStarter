# == Schema Information
#
# Table name: categories
#
#  id   :integer          not null, primary key
#  name :string           not null
#

class Category < ActiveRecord::Base

  validates :name, presence: true, uniqueness: true

  has_many :projects

end
