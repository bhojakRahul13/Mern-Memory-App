const mongoose = require("mongoose");

const db = () => {
  mongoose.connect(
    '"mongodb://localhost:27017/Memory-app',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (!err) {
        console.log("mongodb connect successfully.");
      } else {
        console.log("ERROr in db:" + err);
        //process.exit(1);
      }
    }
  );
}; //db name Memory-app

module.exports = db;