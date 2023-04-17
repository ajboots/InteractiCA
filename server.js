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
    res.sendFile(html_path + '1D-Automata/index.html');
});

app.get('/1D-Automata/cells', (req, res) => {
    res.sendFile(html_path + '1D-Automata/cells.html');
});

app.get('/1D-Automata/cell-interactions', (req, res) => {
    res.sendFile(html_path + '1D-Automata/cell-interactions.html');
});

app.get('/1D-Automata/ruleset-exploration', (req, res) => {
    res.sendFile(html_path + '1D-Automata/ruleset-exploration.html');
});

app.get('/2D-Automata', (req, res) => {
    res.sendFile(html_path + '2D-Automata/index.html');
});

app.get('/2D-Automata/conways-rules', (req, res) => {
    res.sendFile(html_path + '2D-Automata/conways-rules.html');
});

app.get('/2D-Automata/cgol', (req, res) => {
    res.sendFile(html_path + '2D-Automata/cgol.html');
});

app.get('/2D-Automata/ruleset-exploration', (req, res) => {
    res.sendFile(html_path + '2D-Automata/ruleset-exploration.html');
});

app.get('/further-discovery', (req, res) => {
    res.sendFile(html_path + 'further-discovery.html');
});

app.get('*', function(req, res){
    res.sendFile(html_path + 'error.html');
});

// ***************************** //

// As our server to listen for incoming connections
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));