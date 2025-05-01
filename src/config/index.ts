import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  faceAPIKey: process.env.FACE_API_KEY,
  faceAPISecret: process.env.FACE_API_SECRET,
};
