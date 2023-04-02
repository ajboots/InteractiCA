// Import our Express dependency (used for routing)
const express = require('express');
// Create a new server instance
const app = express();
// Set the port number we want to use of this server
const PORT = 3000;

// Designate the public folder as serving static resources
app.use(express.static('static'));

// Set path to find html pages to serve
const html_path = __dirname + '/templates/';

// ******* HTTP ROUTES ******** //

app.get('/', (req, res) => {
    res.sendFile(html_path + 'index.html');
});

app.get('/lesson1', (req, res) => {
    res.sendFile(html_path + 'lesson1/lesson1.html');
});

app.get('/lesson1.1', (req, res) => {
    res.sendFile(html_path + 'lesson1/section1.html');
});

app.get('/lesson1.2', (req, res) => {
    res.sendFile(html_path + 'lesson1/section2.html');
});

app.get('/lesson1.3', (req, res) => {
    res.sendFile(html_path + 'lesson1/section3.html');
});

app.get('/lesson2', (req, res) => {
    res.sendFile(html_path + 'lesson2.html');
});

app.get('/lesson3', (req, res) => {
    res.sendFile(html_path + 'lesson3.html');
});

app.get('/implementations', (req, res) => {
    res.sendFile(html_path + 'implementations.html');
});

// ***************************** //

// As our server to listen for incoming connections
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));