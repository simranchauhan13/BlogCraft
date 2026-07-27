import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
    userId?: number;
}

export const authMiddleware = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {

    const authHeader = req.headers.authorization || "";

    try {
        const decoded = jwt.verify(
            authHeader,
            process.env.JWT_SECRET!
        ) as any;

        req.userId = decoded.id;

        next();

    } catch (e) {
        return res.status(403).json({
            message: "You are not logged in"
        });
    }
};