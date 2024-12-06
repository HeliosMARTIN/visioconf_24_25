import { Schema, model } from "mongoose"

const UserSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: String, required: true },
    job: { type: String, required: true },
    description: { type: String, required: true },
})

export default model("User", UserSchema)
