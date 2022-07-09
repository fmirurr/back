const express = require("express");
var cors = require('cors')
const app = express();

app.use(cors())

// Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(require("./routes/index"));

app.listen(process.env.PORT || 3000);
