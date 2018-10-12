class User < ApplicationRecord
  has_secure_password
  has_many :sites

  validates :user_name, presence: true
  validates :email, presence: true, uniqueness: true
end
