import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export const PORT = process.env.PORT;

async function main() {
  await mongoose.connect(process.env.CONNECTION_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("connected");
}

main();
