import { AccessToken } from "../../interfaces/Token";

declare global {
    namespace Express {
      interface Request {
        token: AccessToken 
      }
    }
  }