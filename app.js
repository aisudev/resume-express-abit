const express = require('express');
const path = require('path')
const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'index.html')).end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;