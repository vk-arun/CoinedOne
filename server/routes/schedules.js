const express = require("express");
const { model } = require("mongoose");
const Schedules = require("../models/schedules");
const SchedulesController = require("../controllers/schedules");

const route = express.Router();

//create schedule
route.post("/add-schedule", SchedulesController.create);
//list schedule
route.post("/list-schedule", SchedulesController.list);
//update schedule
route.post("/update-schedule", SchedulesController.update);
//delete shedule
route.post("/delete-schedule", SchedulesController.pop);

module.exports = route;
