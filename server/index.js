const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'public')));


app.listen(PORT, () => {
  console.log('listening at localhost:' + PORT + "!")
})