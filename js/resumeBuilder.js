/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Jonathan Weedin";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
  "name": "Jonathan",
  "age": 28,
  "role": "Web Developer",
  "mobile": "509-594-6529",
  "email": "jonathanweedin@gmail.com",
  "pictureURL": "images/fry.jpg",
  "welcomeMessage": "Hello, and welcome to my resume!!",
  "skills": "Websites, coding, writing"
};

var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.email);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMessage);
$("#header").prepend(formattedPic);