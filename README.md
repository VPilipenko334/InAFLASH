# README

[InAFlash livelink](https://inaflash.herokuapp.com/)

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
<img width="1009" alt="Screen Shot 2021-08-13 at 12 59 16 PM" src="https://user-images.githubusercontent.com/63820576/129393998-a685903c-9573-4d9f-a85f-7eb81eea0b8a.png">

<img width="939" alt="Screen Shot 2021-08-13 at 1 05 57 PM" src="https://user-images.githubusercontent.com/63820576/129394744-092671c4-569f-4f87-96a0-a2898c364a50.png">

<img width="1002" alt="Screen Shot 2021-08-13 at 1 06 53 PM" src="https://user-images.githubusercontent.com/63820576/129394865-cbe1f927-4e00-47a1-bc52-6321ff9f34c6.png">

### User Authentication
* Users can create an account, which will get stored in the database
* An error will be rendered if a user tries to log in with invalid credentials 
* An error will be rendered if a user tries to create an account with a password that is too short 
* There is a demo user available

<img width="1007" alt="Screen Shot 2021-08-13 at 1 00 17 PM" src="https://user-images.githubusercontent.com/63820576/129394109-11a81c51-ac7e-4390-b3e7-f905b4b1e1da.png">

### Upload a Photo Feature
* Users can upload a photo 
* Users will have to fill out a form that includes the photo's title, description and privacy setting before uploading to the site
* Privacy setting can be turned on or off
* Photo will be uploaded to the user's album and can be rendered on their homepage depending on privacy setting 

### Photo of the week generator
* Users or visitors can click a button that will generate a photo of the week

<img width="973" alt="Screen Shot 2021-08-13 at 1 02 15 PM" src="https://user-images.githubusercontent.com/63820576/129394306-98bd1096-b50f-4996-97e2-3961ecd140e2.png">

## Upcoming Features: 

### Search Bar
* Users can search for other users using the search bar
* Users can search for photos using the search bar 
* Items will be searched using an AJAX request

<img width="444" alt="Screen Shot 2021-08-13 at 1 03 28 PM" src="https://user-images.githubusercontent.com/63820576/129394445-537c06ff-f3ce-44b4-a350-863962fa734e.png">

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



