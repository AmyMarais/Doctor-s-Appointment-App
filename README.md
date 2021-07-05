# Doctor's Appointment MERN application

## LIVE DEMO HERE: 
https://doc-appointment-mern.herokuapp.com/

# Software Requirements
* I will be creating an application that allows doctors to track information about patients and appointments made.
* I will make use of the MERN stack to create this web application
* The MERN stack consists of 4 technologies namely: MongoDB, Express and Node (for the back-end of this application) , React (for the
front-end - more specifically Create-React-App) and Passport and JWT for the authentication middleware
* I am going to use GitHub and Heroku for deloyment
* For styling , Bootstrap and React Bootstrap because these make styling super easy

## How will this application work? 
* This application will allow "doctors" to make, cancel or edit appointments and patient information 
* On the frontend , React will accept information given by the end-user, send it to the server(Express) via Axios to interact with the MongoDB database
* To get acccess to the appointments list, users will either need to login or register as a new user
* Express (the server) will be listening for any requests made by the client and then modify the MongoDB database accordingly

## Are there similar softwares and what differentiates mine?
* This application is simple and easy to use , in comparison to applications such as AppointmentGuru where they are more complex

# Systems Requirements Specifications
## Functional Requirements 
( Define what the system should and shouldn't do )
- user logs in using their username and password 
- allow non-existing users to register and create a new account
- users should be notified upon successful login status 
- users should be able to add, update and delete appointments
- users who are not logged in or registered will only have access to view appointments made

## Non-functional Requirements 
( Non-functional requirements specify how the system should perform it's functional requirements and don't affect the basic functionality of
the system )
- signing into the web application should take less than 10 seconds
- non-existing users should be given the option to sign up to create an account
- the UI needs to be attractive and user-friendly

## Usage
To make use of all the functionalities of this web application you have to register as a new user and then sign in. Once you've successfully logged into the application, you can now make appointments by clicking on the 'Make New Appointment' button. Once the button is clicked , you'll be sent to a page where you will fill out all the necessary details. Once completed, you can return back to the home page to view your appointment list , with the newly added appointment. Should you wish to edit any information about the appointment you can simlpy click on the "Update Appointment Information" button. 

## Installation
- `cd to root folder`
- type `npm install` in terminal to install node_modules folder
- `cd to client`
- type `npm install` in terminal to install node_modules folder
- create a .env file with the following content:
   `
   DB: enter mongoDB string 
   PORT: enter port number
   `
- type `npm run dev` to run the client and the backend of the application concurrently

## Security 
- I used helmet for the server end of the application . Helmet helps to secure HTTP headers :). 

## Deployment 
- I deployed both the front and back-end to heroku

