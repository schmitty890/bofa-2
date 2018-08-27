# bofa-2

Coding assessment for Bank of America

- Visit [Here](https://bankofamerica-2.herokuapp.com/) for a demo deployed to heroku.

# Getting Started

- Fork or clone the GitHub repo to your machine.
- Ensure that you have Node.js, and Gulp installed on your machine.
- In your CLI, navigate to the cloned directory. `npm install` the dependencies and run `gulp` or `npm start`

- Once started, you are able to view the project on `http://localhost:8080/`

- 🎉Happy developing!🎉

# Linting
run `npm run lint` this will show if you have any ESLint errors or warnings. It is good practice to keep code consistent amongst developers.

# Desktop View
<img src="https://thumbs.gfycat.com/FoolishImpracticalAfricanpiedkingfisher-size_restricted.gif" width="600" height="400" />

# Mobile View
<img src="https://thumbs.gfycat.com/FaintImportantKillifish-size_restricted.gif" width="200" height="400" />

# About this project

- This project is a node.js application that uses gulp as a task runner to optimize its code. The gulp tasks concatenate and minify all of the client side javascripts, as well as convert all the scss into css, concatenate and minify all of those scss files into one file, allowing one css and one js file to be served into the application.

- The gulp task creates a `build` folder which holds all of the minified css and js files. This is regenerated everytime the scss or js files are saved when the server is running by the command `gulp`

- In this version, the grocery list data was saved on a free online resource at `https://api.myjson.com/bins/1g3ryg`. This was the endpoint for the client side ajax call to retrieve the data. This is different than the other version, which shows the data saved within the application itself.

# Technology used
- node.js
- scss
- JavaScript
- jQuery
- axios
- html5
- gulp
- eslint

# Client side JavaScript coding style
This application utilizes the revealing modular pattern. This javascript pattern allows us to define all of our functions and variables in the private scope and return an anonymous object with pointers to the private functionality we wish to reveal as public.

This pattern allows the syntax of our scripts to be more consistent. It also makes it more clear at the end of the module which of our functions and variables may be accessed publicly which eases readability.

```
var Module = function() {

   var team = ['Bob', 'Bill', 'Joe'];

   function logTeam() {
     return team;
   }

   return {
      start: logTeam
   }
}();
```

Usage
```
Module.start();
```

