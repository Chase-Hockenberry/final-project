class Employee < ApplicationRecord
    validates :name, presence: true
    validates :age, presence: true, numericality: { only_integer: true }
    validates :position, presence: true
  end
    