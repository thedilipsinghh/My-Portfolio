const mongoose = require("mongoose")
const Portfolio = require("../modal/Portfoli.js")
const path = require("path")
require("dotenv").config({
    path: path.join(__dirname, "../.env")
})

const portfolioInfo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB Connected")

        const result = await Portfolio.findOne()

        if (result) {
            console.log("Portfolio already exists")
            process.exit()
        }

        await Portfolio.create({

            hero: {
                name: "Dilip Singh",
                title: "MERN Stack Developer",
                profileImage: "/profile.jpg",
                resume: "/profile.jpg",
            },

            about: {
                description1: "I build modern web apps",
                description2: "Currently working as frontend developer"
            },

            stats: {
                yearsExperience: 1,
                projectsCompleted: 7,
                technologies: 15,
                happyClients: 2
            },

            contact: {
                email: "ds4718421@gmail.com",
                phone: "+91-9975133445",
                location: "Maharashtra"
            },
        })

        console.log("Seeding Done")
        process.exit()

    } catch (error) {
        console.log(error)
        process.exit()
    }
}

portfolioInfo()