const express = require("express");
const app = express();

// Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(require("./routes/index"));

app.listen(process.env.PORT || 3000);
