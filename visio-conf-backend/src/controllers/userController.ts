import { Request, Response } from "express"
import User from "../models/User"

interface AuthRequest extends Request {
    user?: any
}

class UserController {
    public async getUserInfo(req: AuthRequest, res: Response): Promise<void> {
        try {
            const user = await User.findById(req.user.id)
                .select("email firstname lastname phone job desc picture")
                .populate("user_roles")

            res.status(200).json(user)
        } catch (error) {
            console.log(error)

            res.status(500).json({
                error: "Erreur lors de la récupération des informations utilisateur",
                error_details: error,
            })
        }
    }
}

export default new UserController()
