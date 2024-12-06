import { Request, Response } from "express"
import { sha256 } from "js-sha256"
import { v4 as uuidv4 } from "uuid"
import jwt from "jsonwebtoken"
import User from "../models/User"
import Role from "../models/Role"

class AuthController {
    public async register(req: Request, res: Response): Promise<void> {
        const {
            email,
            password,
            firstname,
            lastname,
            phone,
            job,
            description,
        } = req.body
        try {
            const existingUser = await User.findOne({ email })
            if (existingUser) {
                res.status(400).json({ error: "Email déjà utilisé" })
                return
            }

            const hashedPassword = sha256(password)
            const userRole = await Role.findOne({ role_uuid: "user" })
            const user = new User({
                uuid: uuidv4(),
                email,
                password: hashedPassword,
                firstname,
                lastname,
                phone,
                job,
                desc: description,
                user_roles: [userRole._id],
            })
            await user.save()
            res.status(201).json({
                success: true,
                message: "Inscription réussie",
            })
        } catch (error) {
            console.log(error)

            res.status(500).json({
                success: false,
                error: "Échec de l'inscription",
            })
        }
    }

    public async login(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body
        try {
            const user = await User.findOne({ email })
            if (!user || sha256(password) !== user.password) {
                res.status(401).json({
                    success: false,
                    message: "Email ou mot de passe invalide",
                })
                return
            }

            const token = jwt.sign({ id: user._id }, "secret", {
                expiresIn: "1h",
            })
            res.status(200).json({
                success: true,
                message: "Connexion réussie",
                token,
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                error: "Échec de la connexion",
            })
        }
    }
}

export default new AuthController()
