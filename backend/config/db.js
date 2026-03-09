const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://bandarihemalatha37_db_user:Hema7989@cluster0.kgvuyrd.mongodb.net/?appName=Cluster0")

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;