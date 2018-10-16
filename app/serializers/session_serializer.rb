class SessionSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :email
  has_many :sites
end
