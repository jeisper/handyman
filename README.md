Setup instructions:

First you will need npm/node.
Clone the project and cd into the directory cd handyman
Type npm i command to install all necessary packages.
Next you need to start the development server for the react project by running npm run start This will open the project on your localhost port.




Signing in (authentication) and filling out the form/form validation:

  This website makes possible for a handyman to find customer and a customer to find a handyman.
  For the handyman to create a profile he need to signIn using his google account, Then after he signIn. He can go to the form page and fill up all his informations,
at the end when pressing Submit all the data will be sent to the database and stored using his google account ID. 
  Now The handyMan can access his profile with all the information that was given by him and on the profile page. The handyman will be able to delete profile, update information and signOut of the account. 




Customer Perspective:

  When in the Landing page the customer will be able to have access to all the handyman going to the browse page without the need to SignIn or create a profile.
  When in the customer page, the customer will be able to filter the handyman by category or area of work desired. 
  On the customer page will be multiples handymen with just a breaf about each one and to get more information about them, the customer can click on the card then a pop up will show a more detailed information about the handyman. In this popup The customer will also be able to leave a Review and for future implementation the customer will be able to send a contact email through the form that will be implemented on the Contact button.



Leaving a Review:

On the popUp mentioned in the last section When pressing the button Review, the customer will be redirected to the Review page, where will be available a review functionality, As soon as the customer press to submit the review it will be stored on the handyman collection on the database and will be displayed on the customer page, so future customer can have access to the review made.




Future Implementation:

Complete the filter implementation.
Make a contact form for the card on the Handyman PopUp.
Contact Us page.
About Us page.




Technical Details:

Frontend -
React.js framework
ChakraUI design framework
React Icons library
Firebase Google Authentication

Backend - 
FireStore database
