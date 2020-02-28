const path = require('path');

const express = require('express');
const app = express();
const hbs = require('hbs');
const publicDirectoryPath = path.join(__dirname, '../');
app.use(express.static(publicDirectoryPath));

const port = process.env.PORT || 3000;
app.set('view engine', 'hbs');

app.get('', (req, res) => {
	res.render('index');
});

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});
