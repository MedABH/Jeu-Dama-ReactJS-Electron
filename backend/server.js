const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost:27017/dama', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

// Define routes here

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
