import mongoose from "mongoose"

const RoleSchema = new mongoose.Schema({
    role_uuid: { type: String, required: true },
    role_label: { type: String, required: true },
    role_permissions: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Permission" },
    ],
    role_default: { type: Boolean, required: true, default: false },
})

export default mongoose.model("Role", RoleSchema)
