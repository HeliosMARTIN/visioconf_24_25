import { Router } from "express"
import userController from "../controllers/userController"
import authMiddleware from "../middlewares/authMiddleware"

const router: Router = Router()

router.get("/", authMiddleware, userController.getUserInfo)

export default router
