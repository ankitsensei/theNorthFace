import mongoose from "mongoose";

const connectBD = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB Connected");
  });

  await mongoose.connect(`${process.env.MONGODB_URI}`);
};

export default connectBD;
