const express = require("express");
const eventsRoutes = require("./api/events/routes");;
const app = express();
const connectDb = require("./db/models/database");



//middleware
app.use(express.json()); 
app.use("/api/events",eventsRoutes);



connectDb();
  app.listen(8050, () => {
    console.log("The application is running on localhost:8030");
  });
