import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  cloudinary: {
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
  },
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
  jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  open_router_api_key: process.env.OPENROUTER_API_KEY,
  stripe_secret_key: process.env.STRIPE_SECRET_KEY,
  webhook_secret: process.env.WEBHOOK_SECRET,
  reset_password_secret: process.env.RESET_PASSWORD_SECRET,
  reset_password_expires_in: process.env.RESET_PASS_TOKEN_EXPIRES_IN,
  reset_pass_link: process.env.RESET_PASS_LINK,
  email_sender: process.env.EMAIL_SENDER,
  app_password: process.env.APP_PASSWORD,

  salt_round: process.env.SALT_ROUND,
};
