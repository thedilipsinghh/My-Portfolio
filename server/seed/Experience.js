const mongoose = require("mongoose")
const Experience = require("../modal/Experience")
require("dotenv").config({ path: "./../.env" })


const ExperinceSeed = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("db conneted")
        const ExpResult = await Experience.findOne()
        if (ExpResult) {
            console.log("ExpResult Data Already Exist ")
            process.exit()
        }
        await Experience.create({
            title: "Frontend Developer Intern",
            place: "SkillHub IT Solution",
            date: "Feb 2026 — Present",
            type: "work",
            description:
                "Currently working on real-world frontend applications, improving UI performance, building responsive interfaces, and collaborating with developers."
        })
        console.log("expResult Seed done")
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit()

    }
}

ExperinceSeed()