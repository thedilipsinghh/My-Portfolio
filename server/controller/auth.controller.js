const Admin = require("../modal/Admin.js")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body
        const User = await Admin.findOne({ email })
        if (!User) {
            res.status(200).json({ message: "Invalid email or Password" })
            console.log("Invalid email or Password")
            return
        }
        const verify = await bcrypt.compare(password, User.password)
        if (!verify) {
            console.log("invalid Email or Password")
            return
        }
        const token = jwt.sign(
            { _id: User._id },
            process.env.JWT_KEY,
            { expiresIn: "1d" }
        )
        res.cookie("PortfolioAdmin", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24,
            secure: process.env.NODE_ENV === "production"
        })
        res.status(200).json({ name: User.name, email: User.email, mobilr: User.mobile, })
        res.status(200).json({ message: "Admin login Success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Unable to login admin" })
    }
}

exports.AdminLogout = async (req, res) => {
    try {
        res.clearCookie("PortfolioAdmin")
        res.status(200).json({ message: "Logout success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Unable to logout " })

    }
}