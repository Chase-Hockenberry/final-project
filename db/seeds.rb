# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
Event.create(name: 'Conference', date: Date.today, location: 'New York')
Event.create(name: 'Workshop', date: Date.tomorrow, location: 'San Francisco')
Event.create(name: 'Seminar', date: Date.tomorrow + 1, location: 'Chicago')
Event.create(name: 'Meeting', date: Date.tomorrow + 2, location: 'Los Angeles')
Event.create(name: 'Training', date: Date.tomorrow + 3, location: 'Seattle')

Employee.create(name: 'John Doe', age: 30, position: 'Manager')
Employee.create(name: 'Jane Smith', age: 25, position: 'Developer')
Employee.create(name: 'Michael Johnson', age: 35, position: 'Designer')
Employee.create(name: 'Emily Brown', age: 28, position: 'HR Manager')
Employee.create(name: 'David Wilson', age: 32, position: 'Marketing Specialist')