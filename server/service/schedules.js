const {
  createMdb,
  listMdb,
  findOneMdb,
  findManyMdb,
  pushMultipleMdb,
  updateMdb,
  popMdb,
} = require("../repository/mongoDb");
const Schedules = require("../models/schedules");
const { query } = require("express");
const { updateMany } = require("../models/schedules");

module.exports = {
  create: async (data) => {
    try {
      let result = await createMdb(data, Schedules);
      return result;
    } catch (error) {
      console.log("error ", error);
    }
  },
  list: async (data) => {
    try {
      let result = await listMdb(data, Schedules);
      return result;
    } catch (error) {
      console.log("error ", error);
    }
  },
  update: async (data) => {
    day = data.day;
    let query = { day };
    console.log("data.day ", data.day);
    let res = await findOneMdb(query, Schedules);
    let idd = res._id;

    try {
      let query = data;
      let result = await updateMdb(idd, query, Schedules);
      console.log(" ");
      return result;
    } catch (error) {
      console.log("error ", error);
    }
  },
  pop: async (data) => {
    console.log("data ", data);
    try {
      let result = await popMdb(data, Schedules);
      console.log(" ");
      return result;
    } catch (error) {
      console.log("error ", error);
    }
  },
};
