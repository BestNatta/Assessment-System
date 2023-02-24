const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const bodyParser = require('body-parser');
global.Task = require('./api/models/taskModel');
global.formUser = require('./api/models/userModel');
const routes = require('./api/routes/taskRoutes');

mongoose.connect(
  'mongodb://127.0.0.1:27017/assessmentapp',
  { useNewUrlParser: true }
).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err))

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on port ${port}`);



