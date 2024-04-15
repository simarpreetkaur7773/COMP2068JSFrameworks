import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI =
  "mongodb+srv://abdullah6236a:Nabeel@em.73lixib.mongodb.net/?retryWrites=true&w=majority&appName=EM";
