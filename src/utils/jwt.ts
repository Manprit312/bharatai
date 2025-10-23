import jwt, { SignOptions } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
}

const generateToken = (
    payload: object,
    expiresIn: SignOptions["expiresIn"] = "1h"
): string => {
    return jwt.sign(payload, JWT_SECRET as jwt.Secret, { expiresIn });
};


const CheckExpiredToken = (token: string): boolean => {
    try {
        jwt.verify(token, JWT_SECRET as jwt.Secret);
        return false;
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return true;
        }
        return false;
    }
}


export { generateToken, CheckExpiredToken };
