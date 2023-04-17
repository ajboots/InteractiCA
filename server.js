// Import our Express dependency (used for routing)
const express = require('express');
// Create a new server instance
const app = express();
// Set the port number we want to use of this server
const PORT = 3000;

// Designate the public folder as serving static resources
app.use(express.static('docs'));

// Set path to find html pages to serve
const html_path = __dirname + '/docs/';

// ******* HTTP ROUTES ******** //

app.get('/', (req, res) => {
    res.sendFile(html_path + 'index.html');
});

app.get('/1D-Automata', (req, res) => {
    res.sendFile(html_path + 'lesson1/lesson1.html');
});

app.get('/1D-Automata/cells', (req, res) => {
    res.sendFile(html_path + 'lesson1/section1.html');
});

app.get('/1D-Automata/cell-interactions', (req, res) => {
    res.sendFile(html_path + 'lesson1/section2.html');
});

app.get('/1D-Automata/ruleset-exploration', (req, res) => {
    res.sendFile(html_path + 'lesson1/section3.html');
});

app.get('/2D-Automata', (req, res) => {
    res.sendFile(html_path + 'lesson2.html');
});

app.get('/2D-Automata/conways-rules', (req, res) => {
    res.sendFile(html_path + 'lesson2.1.html');
});

app.get('/2D-Automata/cgol', (req, res) => {
    res.sendFile(html_path + 'lesson2.2.html');
});

app.get('/2D-automata/ruleset-exploration', (req, res) => {
    res.sendFile(html_path + 'lesson2.3.html');
});

app.get('/further-discovery', (req, res) => {
    res.sendFile(html_path + 'implementations.html');
});

app.get('*', function(req, res){
    res.sendFile(html_path + 'error.html');
});

// ***************************** //

// As our server to listen for incoming connections
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));