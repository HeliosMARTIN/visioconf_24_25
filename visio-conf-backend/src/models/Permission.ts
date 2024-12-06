import mongoose from "mongoose"

const PermissionSchema = new mongoose.Schema({
    permission_uuid: { type: String, required: true },
    permission_label: { type: String, required: true },
})

export default mongoose.model("Permission", PermissionSchema)
