import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

console.log(process.env.PORT, process.env.MONGODB_URI);

export default {
  port: process.env.PORT,
  mondo_uri: process.env.MONGODB_URI
};
