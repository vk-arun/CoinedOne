const express = require("express");
const app = express();
const connectDb = require("./config/conn");
const appRoutes = require("./routes/schedules");

connectDb();
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/apps", appRoutes);

console.log("change");

var PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(` app is running on port ${PORT}`);
});
