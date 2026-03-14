const mongoose = require("mongoose")
const Admin = require("../modal/Admin")
require("dotenv").config({ path: "./../.env" })
const bcrypt = require("bcryptjs")


const adminSeed = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB Connnetend ")
        const adminResult = await Admin.findOne()
        if (adminResult) {
            console.log("admin data Already Exist")
            process.exit()
        }
        const hash = await bcrypt.hash("123", 10)
        await Admin.create({
            name: "Dilip Singh",
            email: "ds4718421@gmail.com",
            password: hash,
            mobile: 997513449,
            role: "admin"
        })
        console.log("Admin Seed Success")
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit()

    }
}
adminSeed() 