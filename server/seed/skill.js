const mongoose = require("mongoose")
const Skills = require("../modal/Skills")
require("dotenv").config({ path: "./../.env" })


const skillSeed = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("db Conntend")
        const skillResult = await Skills.findOne()
        if (skillResult) {
            console.log("skillResult already Exist ")
            process.exit()
        }
        await Skills.create({
            name: "React",
        })
        console.log("skill Seed done ")
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit()

    }
}
skillSeed()