var inquirer = require("inquirer");
var fs = require("fs");
const axios = require("axios");
const generateHTML = require("./generateHTML");

var pdf = require('html-pdf');
var pdfConvert;
var options = { format: 'Letter' };

const questions = [
    'Please enter your GitHub username',
    'Please choose one of the available colors: green, blue, pink, red',
];



function checkColor(color) {
    const colors = ['green', 'blue', 'pink', 'red'];
    return colors.includes(color);
}

function writeToFile(data) {

    fs.writeFile("myresume.html",generateHTML(data), (err) => {
        if (err) throw err;
        console.log('Success!');
    });
  
}

async function getGithub() {
    try {
      
        const { user, color } = await inquirer.prompt([
            {
                message: questions[0],
                name: "user"
            },
            {
                message: questions[1],
                name: "color"
            }]);
               
        if (!checkColor(color)) throw 'Please choose from green, blue, pink, red';
    
        const { data } = await axios.get(
            `https://api.github.com/users/${user}`
        );
        const { stars } = await axios.get(
            `https://api.github.com/users/${user}/starred`
        );
        data.color = color;
       
        var location = data.location;
       
        if (location[0] != null) data.city = location[0];
        if (location[1] != null) data.state = location[1].trim();
        if (data.bio === null) data.bio = ' '
        if (data.company === null) data.bio = ' '
      
        writeToFile(data);

    } catch (err) {
        console.log(err);
    }
}

function init() {
    getGithub();
}
init();