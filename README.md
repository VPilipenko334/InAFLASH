# README

## About 

InAFlash is a clone of the photo-sharing website 500px. InAFlash allows users to log in, sign up or have a demo account sign in, while storing user information in a PostgreSQL database. On InAFlash homepage, users can search up any photo or user information that they'd like using the search bar. There is also a photo of the week feature, which users or visitors can click on in order to generate a photo that has had the most likes of that week. Once users log in or create an account, the user can then upload a photo, with a title, description and privacy setting -- which will set the photo to either be public and be viewed by other users, or private. A user can have an album of photos that they can share, and will have a home-feed that populates with pictures. Users can also follow other users, as well as comment and like other photos. 

I used a wide variety of technologies in order to create this website. For the backend, I used Ruby on Rails with Active Record. I also used PosgreSQL for storing data in the database along with Amazon AWS s3 for storing all the images. For the frontend portion of the project, I used React Redux along with Node.js in order to create a dynamic application. 

## Technologies 
* Ruby
* Rails
* React.js
* Redux.js
* Node.js
* SQL/PostgreSQL
* Webpack
* Amazon AWS S3
* Active Storage 

## Features 

## Homepage: 
<img width="1015" alt="Screen Shot 2021-08-13 at 12 42 35 PM" src="https://user-images.githubusercontent.com/63820576/129392094-d85c0ed9-1dc9-4250-a2b6-42a2a56d29f9.png">

### User Authentication
* Users can create an account, which will get stored in the database
* An error will be rendered if a user tries to log in with invalid credentials 
* An error will be rendered if a user tries to create an account with a password that is too short 
* There is a demo user available

### Upload a Photo Feature
* Users can upload a photo 
* Users will have to fill out a form that includes the photo's title, description and privacy setting before uploading to the site
* Privacy setting can be turned on or off
* Photo will be uploaded to the user's album and can be rendered on their homepage depending on privacy setting 

### Photo of the week generator
* Users or visitors can click a button that will generate a photo of the week


## Upcoming Features: 

### Search Bar
* Users can search for other users using the search bar
* Users can search for photos using the search bar 
* Items will be searched using an AJAX request


### User's Homepage 
* A user will be able to have a homepage that will render all the different photos shared by other users
* Users will be able to click on any photo on that homepage and click it
* Users will be able to click on any other user and follow them 

### Follows/ Followers
* Users will be able to follow other users 

### Likes
* Users will be able to like other users
* Users will be able to like pictures

### Comments 
* Users will be able to comment on pictures 



