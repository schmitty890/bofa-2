# bofa-2

Coding assessment for Bank of America

# Getting Started

- Fork or clone the GitHub repo to your machine.
- Ensure that you have Node.js, and Gulp installed on your machine.
- In your CLI, navigate to the cloned directory. `npm install` the dependencies and run `gulp` or `npm start`

- Once started, you are able to view the project on `http://localhost:8080/`

- 🎉Happy developing!🎉

# Linting
run npm run `-s eslint .` this will show if you have any ESLint errors or warnings. It is good practice to keep code consistent amongst developers.

<img src="https://thumbs.gfycat.com/FoolishImpracticalAfricanpiedkingfisher-size_restricted.gif" width="600" height="400" />

# About this project

- This project is a node.js application that uses gulp as a task runner to optimize its code. The gulp tasks concatenate and minify all of the client side javascripts, as well as convert all the scss into css, concatenate and minify all of those scss files into one file, allowing one css and one js file to be served into the application.

- In this version, the grocery list data was saved on a free online resource at `https://api.myjson.com/bins/1g3ryg`. This was the endpoint for the client side ajax call to retrieve the data. This is different than the other version, which shows the data saved within the application itself.

# Client side JavaScript coding style
This application utilizes the revealing modular pattern. This javascript pattern allows us to define all of our functions and variables in the private scope and return an anonymous object with pointers to the private functionality we wish to reveal as public.

This pattern allows the syntax of our scripts to be more consistent. It also makes it more clear at the end of the module which of our functions and variables may be accessed publicly which eases readability.

```
var Module = function(){

   var team = ['Bob', 'Bill', 'Joe'];

   function logTeam(){
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

