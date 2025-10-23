// src/utils/jwt.ts
import * as jose from "jose";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

const secret = new TextEncoder().encode(JWT_SECRET);

export async function generateToken(payload: object, expiresIn = "1h") {
  const expSeconds = Math.floor(Date.now() / 1000) + parseDuration(expiresIn);
  return await new jose.SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(expSeconds)
    .sign(secret);
}

export async function CheckExpiredToken(token: string) {
  try {
    await jose.jwtVerify(token, secret);
    return false;
  } catch (error) {
    if (error instanceof jose.errors.JWTExpired) {
      return true;
    }
    return false;
  }
}

// Helper to convert "1h", "30m" etc. to seconds
function parseDuration(duration: string): number {
  const match = /^(\d+)([smhd])$/.exec(duration);
  if (!match) return 3600; // default 1 hour
  const value = parseInt(match[1]);
  const unit = match[2];
  switch (unit) {
    case "s": return value;
    case "m": return value * 60;
    case "h": return value * 60 * 60;
    case "d": return value * 24 * 60 * 60;
    default: return 3600;
  }
}
