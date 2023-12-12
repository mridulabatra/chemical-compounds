const express = require('express');
const bodyParser = require('body-parser'); //
//initalize db
const sequelize = require('./config/sequelize');
const compoundInfoRoutes = require('./controller/compoundInfoRoutes.js');
const cors = require('cors');

const app = express();
//
app.use(bodyParser.json());
app.use(cors());

//middleware comman endpt. 
app.use('/api', compoundInfoRoutes);

//inialize db (inbuilt)
sequelize.sync({ force: false }) // Set force to true to drop existing tables
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
