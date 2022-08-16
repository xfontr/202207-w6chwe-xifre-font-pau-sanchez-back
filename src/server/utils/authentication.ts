import "../../loadEnvironment";
import jwt from "jsonwebtoken";

interface JwtPayload {
  id: string;
  userName: "";
}

// Jamás pondremos el secret a chapa!!
const mySecret = process.env.SECRET;

export const createToken = (payload: JwtPayload) => jwt.sign(payload, mySecret); // esto devuelve un stringw

export const verifyToken = (token: string) => jwt.verify(token, mySecret);
// retorna string si algo fue mal, devuelve el payload como object si todo bien
