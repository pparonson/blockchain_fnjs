const express = require("express");

const app = express();

// this serves the index.html page with index.js entry into app
app.use(express.static("./"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));