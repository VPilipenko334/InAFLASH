# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# don't forget to do this!
require 'open-uri'
require 'net/http'

Picture.destroy_all
User.destroy_all

#creating users 
user1 = User.create!(username: 'veropili', password: 'hello123456')
user2 = User.create!(username: 'marafinkel', password: 'passwordpassword')
user3 = User.create!(username: 'chrisd', password: 'hellofriends')
user4 = User.create!(username: 'jenny', password: 'thisismypassword')
user5 = User.create!(username: 'elonmusk', password: '123456')
user6 = User.create!(username: 'willsand', password: 'idontknowmyname')
user7 = User.create!(username: 'mikem', password: 'teslaspacerocket')
user8 = User.create!(username: 'walker', password: 'jellybeansareyum')
user9 = User.create!(username: 'charis', password: 'ilovetodance')  
user10 = User.create!(username: 'nicha', password: 'imclinicallyinsanetbh')


#adding pictures to the database 

file1 = URI.open("https://inaflash-seeds.s3.amazonaws.com/ocean_view_portrait.jpeg")
file2 = URI.open("https://inaflash-seeds.s3.amazonaws.com/tiny+flower.jpeg")
file3 = URI.open("https://inaflash-seeds.s3.amazonaws.com/surt.jpeg")
file4 = URI.open("https://inaflash-seeds.s3.amazonaws.com/yellow.jpeg")
file5 = URI.open("https://inaflash-seeds.s3.amazonaws.com/mountainnnn.jpeg")
file6 = URI.open("https://inaflash-seeds.s3.amazonaws.com/giraffee.jpeg")
file7 = URI.open("https://inaflash-seeds.s3.amazonaws.com/lavender.jpeg")
file8 = URI.open("https://inaflash-seeds.s3.amazonaws.com/green+woods.jpeg")
file9 = URI.open("https://inaflash-seeds.s3.amazonaws.com/snow.jpeg")
file10 = URI.open("https://inaflash-seeds.s3.amazonaws.com/lakehouse.jpeg")


picture1 = Picture.new(title: 'Bright Blue Ocean', private: false, description: 'Stunning photo of the bright blue ocean as the waves cascade', user_id: user1.id)
picture2 = Picture.new(title: 'Yellow Flower', private: false, description: 'A stunning small yellow flower gets submerged in a blue lake', user_id: user2.id)
picture3 = Picture.new(title: 'Surfing Session', private: false, description: 'A wonderful time while surfing the beach in California', user_id: user3.id)
picture4 = Picture.new(title: 'Yellow Background', private: false, description: 'A lovely woman poses beside a bright yellow background', user_id: user4.id)
picture5 = Picture.new(title: 'Snowy Mountains', private: true, description: 'Stunning photo of the beautiful, snowy mountains, in the middle of winter', user_id: user5.id)
picture6 = Picture.new(title: 'Giraffee', private: true, description: 'A girrafe stands with a light sky behind him', user_id: user6.id)
picture7 = Picture.new(title: 'Lavender', private: true, description: 'A stunning shade of purple emerges from a lavender plant', user_id: user7.id)
picture8 = Picture.new(title: 'Green Woods', private: true, description: 'The trees will change color during the fall', user_id: user8.id)
picture9 = Picture.new(title: 'Snow', private: true, description: 'First snowfall emerges from the sky', user_id: user9.id)
picture10 = Picture.new(title: 'House on a lake', private: false, description: 'A small house stands at the tip of a lake', user_id: user10.id)


#attaching the pictures to the users 
picture1.picture.attach(io: file1, filename: 'ocean_view_portrait.jpeg')
picture2.picture.attach(io: file2, filename: 'tiny+flower.jpeg')
picture3.picture.attach(io: file3, filename: 'surt.jpeg')
picture4.picture.attach(io: file4, filename: 'yellow.jpeg')
picture5.picture.attach(io: file5, filename: 'mountainnnn.jpeg')
picture6.picture.attach(io: file6, filename: 'giraffee.jpeg')
picture7.picture.attach(io: file7, filename: 'lavender.jpeg')
picture8.picture.attach(io: file8, filename: 'green+woods.jpeg')
picture9.picture.attach(io: file9, filename: 'snow.jpeg')
picture10.picture.attach(io: file10, filename: 'lakehouse.jpeg')


picture1.save!
picture2.save!
picture3.save!
picture4.save!
picture5.save!
picture6.save!
picture7.save!
picture8.save!
picture9.save!
picture10.save!