const {
  create,
  list,
  pop,
  login,
  update,
  push,
} = require("../service/schedules");
const Schedules = require("../models/schedules");
const { updateMdb } = require("../repository/mongoDb");

module.exports = {
  create: async (req, res) => {
    try {
      console.log("req.body ", req.body);
      const result = await create(req.body);
      res.json(result);
    } catch (error) {
      console.log("error ", error);
      throw error;
    }
  },
  list: async (req, res) => {
    try {
  
      const result = await list(req.query);
      res.json(result);
    } catch (error) {
      console.log("error ", error);
      throw error;
    }
  },
  update: async (req, res) => {
    try {
      const result = await update(req.body);
      res.json(result);
    } catch (error) {
      console.log("error ", error);
      throw error;
    }
  },
  pop: async (req, res) => {
    try {
      const result = await pop(req.body.id);
      res.json(result);
    } catch (error) {
      console.log("error ", error);
      throw error;
    }
  },
};
