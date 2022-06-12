const express = require('express') // creates a new webpage( new session)
const app = express()
const path = require('path')

app.get('/', (req, res) => {  // //when someone gets the root route
    res.sendFile(path.join(__dirname, "/index.html"))   // send response 
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "/login.html"))
})

const port = 4000

app.listen(port, () => {
console.log (`Server is listening on port ${port}`)
})





//https://www.digitalocean.com/community/tutorials/use-expressjs-to-deliver-html-files
//https://www.npmjs.com/package/express

// Everytime you make a change you need to restart the program*** 
//Restart the program by: 
//CTRL C - TO stop the port from running
// npm start to restart the program
//Enter "/login" in url to restart the program

//create  new package :  npm init # Create a package.json file
//run it with no questions : -y

