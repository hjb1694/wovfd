const config = require('./config');
const express = require('express');
const app = express();

app.use(express.json());
app.set('view engine','ejs');
app.set('views', './views');

app.use('/admin', require('./routes/admin'));
app.use(require('./routes/general'));


app.listen(config.port, () => console.log(`Listening on port ${config.port}`));