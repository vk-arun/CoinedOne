const mogoose = require("mongoose");

const URI = "mongodb+srv://dbUser:dbUser1236@cluster0.x8gak.mongodb.net/CoinedOne?retryWrites=true&w=majority";

const connectDb = async () => {
  await mogoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  console.log("db connected");
};
module.exports = connectDb;
