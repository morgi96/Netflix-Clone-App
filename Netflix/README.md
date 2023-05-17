# NETFLIX Clone

Netflix Clone with movies that using TMDB API.
App has some features but i will developing more in several days.

### Link to Netlify

- https://incredible-pony-5ff21c.netlify.app/home

## Features

Added features so far:

- **Register and Log In**
  You can't acces to the home page without registering. You can use fake e-mail and password and after register you gonna be navigated to Home page with movies.

- **Banner with random movie**
  Banner generating random movie with every refresh. Presenting image, title, short overview and release date.

- **Modal with more informations**
  Button on Banner opening a modal window with trailer and more informations about movie that is actually on banner. Modal contains title, full overview, release date, genres, cast, match % depends on average of votes, button to play/pause and button that allows you to add a film to a favourite list.

- **Rows with sliders**
  Each row has a slider with specific movies API (popular, top rated, latest). If you click a movie then below the row you will see a container with content about movie that you clicked. At the moment there are title and title.
  Each slider has a buttons to move a movies to the left and right. When you hover on row you going to see them.

- **Search Bar & Modal Results**
  In top left corner in Navbar is Search button that generating a new modal with input to search a Movies. You can write a title then after 1 second stop you going to see results. You can close modal with keyboard clicking 'esc'. You can move up and down between results with you Arrow Up and Arrow Down.

- **Account Page**
  If you add a film from banner by clicking more informations then thumbs up button you can see this movie on list in your account page.

## Problems which I found

Problems which I found and see:

- **Modal with results**
  Little bit of problem with showing movies in view properly when changing them with arrows.

- **Layout for register/login**
  I need to repair a content(text) changing. When you are on login page and click 'Need account? Sign In' then you are navigated to register page but text is not changing to 'Sign Up'.

- **Thumbs Up button background in Modal**
  Button changing background color to white when you add movie to favourite but then if you closing Modal window and opening again, the background of button is dissapearing.

- **Search button**
  If you are logged and changing page to login or account you still see a search button - I need to solve this.

## Incoming features & things to do

- **Structure of App**
  Im gonna refactor code and structure.

- **Avatar changing and nickname**
  Thinking about feature that allows you to change avatar in settings account and maybe nickname. I need to think about it.

- **List of genres in nav**
  Links to different genres. When you click for each then you will get a filtered movies depending on genre that you clicked. You will see them below the banner (or maybe in another place, idk)

- **Trailer on hovering a movie**
  When you hovering movie about 2-4 sek then image is replacing by trailer of this movie.

- **Removing movie from favourites**

- **More informations about movie**
  In container with content below the row (when you select a movie). Maybe in modal results too.

## Tech Stack:

- **JavaScript**
- **React.js**
- **Tailwind**
