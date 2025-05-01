import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import config from "../config";

const FACE_API_KEY = config.faceAPIKey;
const FACE_API_SECRET = config.faceAPISecret;

const verifyFemale = async (imagePath: string): Promise<boolean> => {
  try {
    const formData = new FormData();
    formData.append("api_key", FACE_API_KEY);
    formData.append("api_secret", FACE_API_SECRET);
    formData.append("image_file", fs.createReadStream(imagePath));
    formData.append("return_attributes", "gender");

    console.log("Sending request to Face++ API...");

    const response = await axios.post(
      "https://api-us.faceplusplus.com/facepp/v3/detect",
      formData,
      { headers: formData.getHeaders() }
    );

    const faces = response.data.faces;
    if (faces.length > 0) {
      const gender = faces[0].attributes.gender.value;
      return gender === "Female";
    } else {
      throw new Error("No face detected");
    }
  } catch (err: any) {
    console.error("Face detection error:", err.response?.data || err.message);
    return false;
  }
};

export default verifyFemale;
