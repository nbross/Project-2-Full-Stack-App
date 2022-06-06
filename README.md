# Project-2-Full-Stack-App
# Made to Make
Are you tired of having to go through your webmaster every time you want to update or change your restaurant’s webpage? With our tool, you can log in to your Made-to-make webpage and create the perfect menu to showcase your chef’s dishes!
## User Story

```
AS A person loves to cook food and creates new recipes
I WANT a website to log these recipes to
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Project Requirements

```
Use Node.js and Express.js to create a RESTful API.

Use Handlebars.js as the templating engine.

Use MySQL and the Sequelize ORM for the database.

Have both GET and POST routes for retrieving and adding new data.

Be deployed using Heroku (with data).

Use at least one new library, package, or technology that we haven’t discussed.

Have a polished UI.

Be responsive.

Be interactive (i.e., accept and respond to user input).

Have a folder structure that meets the MVC paradigm.

Include authentication (express-session and cookies).

Protect API keys and sensitive information with environment variables.

Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).

Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).
```

## Acceptance Criteria 
```
GIVEN a CMS-Style Full-Stack Website
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my email and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with an existing menu post that includes the menu's title and a picture
WHEN I click on an existing menu
THEN I am presented with the recipes and pictures of the food items
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with the option to add a new recipe post
WHEN I click on the button to add a new recipe post
THEN I am prompted to enter both a title and contents for my recipe post
WHEN I click on the button to create a new recipe post
THEN the title and contents of my recipe are saved and I am taken back to the dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
```

## Technologies Used
Handlebars
Js
Node.js
Express.js
SQL
Multer npm
bcrypt
dotenv
sequelize
connect-session-sequelize
express-handlebars
express-session

## Screenshot

![Made-To-Make](/public/images/2022-06-05.png)

## Repo link

Git Hub Repo: https://github.com/nbross/Project-2-Full-Stack-App

Deployed Site: https://hidden-mesa-12283.herokuapp.com/