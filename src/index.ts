import express = require('express');

const app: express.Application = express();

app.get('/', function (req, res) {
    res.send('🎉Hello App Engine 🇵🇹 🥳');
})

app.get('/healthcheck', function (req, res) {
    res.status(200).json({ data: "♥ ♥ ♥ beats 😂" })
})

const port = process.env.PORT || 8080
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
})