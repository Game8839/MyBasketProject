const { sequelize } = require('./sequelize/models');
sequelize.sync({ alter: true });

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

const error = require('./middlewares/error');
const notFound = require('./middlewares/notFound');
const authRoute = require('./routes/authRoute');
const authenticate = require('./middlewares/authenticate');

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/auth', authRoute);

app.use(error);
app.use(notFound);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});
