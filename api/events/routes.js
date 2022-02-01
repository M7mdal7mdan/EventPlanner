const express = require("express");
const router = express.Router();
const {
    fetchEvents,postEvents,deleteEvents,updateEvents,searchByNameEvents,fullyBookedEvents
} = require("./controllers")


// Events Create
router.get("/",fetchEvents);

//Search by Name list

// router.get("/",searchByNameEvents);

// router.get("/",fullyBookedEvents);

// Events List
router.post("/", postEvents);

// Events Delete
router.delete("/:eventId",deleteEvents);

//Events Update
router.put("/:eventId", updateEvents);
// ("/api/events/eventID")

module.exports = router