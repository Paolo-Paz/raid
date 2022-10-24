const express = require('express');
const app = express();

const port = 8000;

app.use('/', express.static('default-service/website'));

app.listen(port, () => console.log(`listening on port "${port}"`));