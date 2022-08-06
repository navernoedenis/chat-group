import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_ACCESS_EXPIRES = process.env.JWT_ACCESS_EXPIRES as string;
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET as string;
const JWT_REFRESH_EXPIRES = process.env.JWT_REFRESH_EXPIRES as string;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET as string;

interface TOKEN_PAYLOAD extends JwtPayload {
  userId: number;
}

function createAccessToken(userId: number) {
  return jwt.sign({ userId }, JWT_ACCESS_SECRET, {
    expiresIn: JWT_ACCESS_EXPIRES
  });
}

function createRefreshToken(userId: number) {
  return jwt.sign({ userId }, JWT_REFRESH_SECRET, {
    expiresIn: JWT_REFRESH_EXPIRES
  });
}

function createTokens(userId: number) {
  const accessToken = createAccessToken(userId);
  const refreshToken = createRefreshToken(userId);

  return { accessToken, refreshToken };
}

function verifyAccessToken(token: string) {
  try {
    return <TOKEN_PAYLOAD>jwt.verify(token, JWT_ACCESS_SECRET);
  } catch (error) {
    return null;
  }
}

function verifyRefreshToken(token: string) {
  try {
    return <TOKEN_PAYLOAD>jwt.verify(token, JWT_REFRESH_SECRET);
  } catch (error) {
    return null;
  }
}

const TokenService = {
  createAccessToken,
  createRefreshToken,
  createTokens,
  verifyAccessToken,
  verifyRefreshToken
};

export default TokenService;
