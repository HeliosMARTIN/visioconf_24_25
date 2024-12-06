import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

interface AuthRequest extends Request {
    user?: string | object
}

const authMiddleware = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
): void => {
    const token = req.header("Authorization")?.replace("Bearer ", "")
    if (!token) {
        res.status(401).json({ error: "Accès refusé" })
        return
    }

    try {
        const decoded = jwt.verify(token, "secret")
        req.user = decoded
        next()
    } catch (error) {
        res.status(401).json({ error: "Token invalide" })
    }
}

export default authMiddleware
