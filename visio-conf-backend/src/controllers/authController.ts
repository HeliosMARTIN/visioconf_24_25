import { Request, Response } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User"

class AuthController {
    public async register(req: Request, res: Response): Promise<void> {
        const {
            username,
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

            const hashedPassword = await bcrypt.hash(password, 10)
            const user = new User({
                username,
                email,
                password: hashedPassword,
                firstname,
                lastname,
                phone,
                job,
                description,
            })
            await user.save()
            res.status(201).json({
                success: true,
                message: "Inscription réussie",
            })
        } catch (error) {
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
            if (!user || !(await bcrypt.compare(password, user.password))) {
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
