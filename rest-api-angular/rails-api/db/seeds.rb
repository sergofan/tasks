# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
s1 = Status.create(status: 'Active')
s2 = Status.create(status: 'Not active')
customers = Customer.create ([
	{name: 'Петя', status: s1}, 
	{name: 'Вася', status: s2}, 
	{name: 'Лёлик', status: s1}, 
	{name: 'lol', status: s2}, 
])
