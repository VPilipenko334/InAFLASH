# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
# Picture.destroy_all

# user1 = User.create!(username: 'veropili', password: 'hello123456')
# user2 = User.create!(username: 'marafinkel', password: 'passwordpassword')
# user3 = User.create!(username: 'chrisd', password: 'hellofriends')
# user4 = User.create!(username: 'jenny', password: 'thisismypassword')
# user5 = User.create!(username: 'elonmusk', password: '123456')
# user6 = User.create!(username: 'willsand', password: 'idontknowmyname')
# user7 = User.create!(username: 'mikem', password: 'teslaspacerocket')
# user8 = User.create!(username: 'walker', password: 'jellybeansareyum')
# user9 = User.create!(username: 'charis', password: 'ilovetodance')
# user10 = User.create!(username: 'nicha', password: 'imclinicallyinsanetbh')
# user11 = User.create!(username: 'mishka', password: 'passwordsarelong')
# user12 = User.create!(username: 'jellybean', password: 'imadog')
# user13 = User.create!(username: 'ronniepizzle', password: 'swimming')
# user14 = User.create!(username: 'girlygirl101', password: 'tirednosleep')
# user15 = User.create!(username: 'hifriends', password: 'passpasspass')


require 'open-uri'

demo_user = User.create(username: "Mishka", email: "mishka@email.com", password: "mishkapassword")

file = open('https://<your_bucket>.<your_region>.amazonaws.com/<optional_folder_name>/<some_file>.jpg')

demo_user.avatar.attach(io: file, filename: 'some_file.jpg')