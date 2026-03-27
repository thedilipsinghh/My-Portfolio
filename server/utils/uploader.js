const multer = require("multer")
const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_API_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadProfile = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "application/pdf"]
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true)
        } else {
            cb(new Error("File type not supported"), false)
        }
    }
}).fields([
    { name: "profileImage", maxCount: 1 },
    { name: "resume", maxCount: 1 }
])

const uploadProject = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith("image/")) {
            cb(null, true)
        } else {
            cb(new Error("Only images are allowed for projects"), false)
        }
    }
}).single("image")

module.exports = {
    uploadProfile,
    uploadProject,
    cloudinary
}