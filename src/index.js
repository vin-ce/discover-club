require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const path = require('path');

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build/src/index.html'));
});

app.listen(PORT, () => {
	console.log(`listening on ${PORT}`);
});
