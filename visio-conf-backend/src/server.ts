import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import authRoutes from "./routes/authRoutes"
import userRoutes from "./routes/userRoutes"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

class Server {
    public app: express.Application

    constructor() {
        this.app = express()
        this.config()
        this.routes()
        this.mongoSetup()
    }

    private config(): void {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(
            cors({ origin: "http://localhost:5173", credentials: true })
        )
    }

    private routes(): void {
        this.app.use("/auth", authRoutes)
        this.app.use("/init", userRoutes)
    }

    private mongoSetup(): void {
        mongoose
            .connect("mongodb://localhost:27017/visio-conf", {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => console.log("MongoDB connecté"))
            .catch((err) =>
                console.error("Erreur de connexion à MongoDB:", err)
            )
    }
}

const server = new Server().app
const PORT = process.env.PORT || 3000
server.listen(PORT, () =>
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`)
)
