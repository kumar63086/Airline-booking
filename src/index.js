const express = require('express');
const app = express();
require('dotenv').config();

const { ServerConfig, logger } = require('./config');
const apirouter = require('./Routes');

// Middleware
app.use(express.json());

// Routes
app.use('/api', apirouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start Server
app.listen(ServerConfig.PORT, () => {
  console.log(`Server is running on port ${ServerConfig.PORT}`);
  logger.info(`🚀 Server is running on port ${ServerConfig.PORT}`);
});
