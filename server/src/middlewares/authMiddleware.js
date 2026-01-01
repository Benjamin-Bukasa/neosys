import { verifyToken } from "../utils/jwt.js";
import prisma from "../config/db.js";

export const authMiddleware = async (req, res, next) => {
  try {
    // 1️⃣ Récupération du token depuis cookie httpOnly
    const token = req.cookies?.access_token;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized: token missing",
      });
    }

    // 2️⃣ Vérification JWT
    const decoded = verifyToken(
      token,
      process.env.JWT_ACCESS_SECRET
    );

    /**
     * decoded = {
     *   userId,
     *   role,
     *   iat,
     *   exp
     * }
     */

    // 3️⃣ (Option sécurité) Vérifier que l’utilisateur existe encore
    const userExists = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true }
    });

    if (!userExists) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    // 4️⃣ Injection utilisateur pour la suite
    req.user = {
      id: decoded.userId,
      role: decoded.role,
    };

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized: invalid or expired token",
    });
  }
};
