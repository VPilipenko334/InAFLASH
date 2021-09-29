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


file1 = open("https://inaflash-seeds.s3.amazonaws.com/sunflower.jpg")
file2 = open("https://inaflash-seeds.s3.amazonaws.com/bride.jpg")
file3 = open("https://inaflash-seeds.s3.amazonaws.com/castle.jpg")
file4 = open("https://inaflash-seeds.s3.amazonaws.com/child.jpg")
file5 = open("https://inaflash-seeds.s3.amazonaws.com/cloud.jpg")
file6 = open("https://inaflash-seeds.s3.amazonaws.com/grey.jpg")
file7 = open("https://inaflash-seeds.s3.amazonaws.com/fairy.jpg")
file8 = open("https://inaflash-seeds.s3.amazonaws.com/house.jpg")
file9 = open("https://inaflash-seeds.s3.amazonaws.com/mushrooms.jpg")
file10 = open("https://inaflash-seeds.s3.amazonaws.com/ocean.jpg")


picture1 = Picture.new(title: 'sunflower', private: false, description: 'lovely sunflower', user_id: user1.id)
picture2 = Picture.new(title: 'bride', private: false, description: 'a photo of a beautiful bride', user_id: user2.id)
picture3 = Picture.new(title: 'castle', private: false, description: 'a wonderful castle stands', user_id: user3.id)
picture4 = Picture.new(title: 'child', private: false, description: 'a child is found on the photo', user_id: user4.id)
picture5 = Picture.new(title: 'cloud', private: true, description: 'the beautiful clouds', user_id: user5.id)
picture6 = Picture.new(title: 'grey', private: true, description: 'grey clouds', user_id: user6.id)
picture7 = Picture.new(title: 'fairy', private: true, description: 'a beautiful fairy has appeared!', user_id: user7.id)
picture8 = Picture.new(title: 'house', private: true, description: 'a house stands', user_id: user8.id)
picture9 = Picture.new(title: 'mushrooms', private: true, description: 'beautiful neon mushrooms that light up the night sky', user_id: user9.id)
picture10 = Picture.new(title: 'ocean', private: false, description: 'the ocean is the purest place on earth', user_id: user10.id)


#attaching the pictures to the users 
picture1.picture.attach(io: file1, filename: 'sunflower.jpg')
picture2.picture.attach(io: file2, filename: 'bridge.jpg')
picture3.picture.attach(io: file3, filename: 'castle.jpg')
picture4.picture.attach(io: file4, filename: 'child.jpg')
picture5.picture.attach(io: file5, filename: 'cloud.jpg')
picture6.picture.attach(io: file6, filename: 'grey.jpg')
picture7.picture.attach(io: file7, filename: 'fairy.jpg')
picture8.picture.attach(io: file8, filename: 'house.jpg')
picture9.picture.attach(io: file9, filename: 'mushrooms.jpg')
picture10.picture.attach(io: file10, filename: 'ocean.jpg')

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