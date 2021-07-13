const { ObjectId } = require("mongoose/lib/schema");

var allFuctions = (module.exports = {
  createMdb: async (data, Model) => {
    try {
      return Model.create(data);
    } catch (error) {
      console.log("Error in mongo commen file createMdb :", error);
      throw error;
    }
  },

  listMdb: async (query, Model, countStatus, limit, skip, sort) => {
    console.log(" ", { query, countStatus, limit, skip, sort });
    try {
      let result = await Model.find(query, {})
        .sort(sort || { updatedAt: -1 })
        .skip(skip)
        .limit(limit);
      let response = result;
      if (countStatus)
        response = {
          data: response,
          count: await Model.count(query),
        };
      return response;
    } catch (error) {
      console.log("Error in mongo commen file  listMdb:", error);
      throw error;
    }
  },

  getMdb: async (id, Model) => {
    try {
      console.log("id", id);
      let result = await Model.findById(id);
      return result;
    } catch (error) {
      console.log("Error in mongo commen file  getMdb:", error);
      throw error;
    }
  },

  updateMdb: async (id, data, Model) => {
    try {
      console.log("id", id);
      console.log("data", data);
      return await Model.updateMany(
        {
          _id: id,
        },
        { $set: data },
        { new: true }
      );
    } catch (error) {
      console.log("Error in mongo commen file  updateMdb:", error);
      throw Error(error);
    }
  },

  popMdb: async (id, Model) => {
    try {
      console.log("id", id);
      let result = await Model.deleteOne({
        _id: id,
      });
      return result;
    } catch (error) {
      console.log("Error in mongo commen file  getMdb:", error);
      throw error;
    }
  },

  findOneMdb: async (query, Model) => {
    try {
      console.log("query ", query);
      let record = await Model.findOne(query);
      return record;
    } catch (error) {
      console.log("Error in mongo commen file  findOneMdb:", error);
      throw Error(error);
    }
  },
});
