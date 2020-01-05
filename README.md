# firstNode

## PDF resume Generator

This project is designed to take user input and translate that into a PDF resume. When the file is activated in terminal, it will ask the user to select a color from the choices provided and ask them for their Github user name, and then populate a HTML file with their color selection and a few pieces information from the users GitHub profile, and then convert it into a PDF file.

### Why was this project useful?

Being able to pull information from one website to dynamically create items on another website is something we have worked with before, and it has proven quite useful for a myriad of uses. This project takes a different approach by stepping away from the web browser. For me, this seems like a great project for taking our knowledge of javaScript in the browser and moving it into a different environment as well as adding things such as asyncronous functions and promises to our tool belt. 

### My Struggles with the project

This project was a little bit easier for me to grasp, with the exception of the PDF conversions and .gitignore. To Psuedo-code it out, I had to ask the user to select a color and to input their username. Inquirer helps me take those answers and then run a series of functions. It takes the color selection and makes visual changes, and takes the github name and populates 4 fields from data retrieved from your github page. It takes all of those fields and then builds an HTML page, and then converts that into a PDF file. 

I had to call on a lot of my fellow students to get help on some of these issues. So I want to call out Aslan, Alexa, and Nate for asking my questions before I could!