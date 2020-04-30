class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :username
  # attributes :id, :name
  has_many :characters
end
