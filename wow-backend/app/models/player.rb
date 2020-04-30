class Player < ApplicationRecord
  # has_secure_password
  has_many :characters, dependent: :delete_all
  validates :name, presence: true
end
