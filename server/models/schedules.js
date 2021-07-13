const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
  day: {
    type: Object,
  },
  workTime: {
    type: Array,
  },
  workTimeAppUsageLimit:{
      type: Object
  },
  nonWorkTimeAppUsageLimit: {
    type: Object
  },
});
const schedules = (module.exports = mongoose.model(
  "Schedules",
  ScheduleSchema
));
