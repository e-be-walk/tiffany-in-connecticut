class SessionSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :email
  has_many :comments
  has_many :discussions
end
