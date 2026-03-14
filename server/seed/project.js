const mongoose = require("mongoose")
const Projects = require("../modal/Projects")
require("dotenv").config({ path: "./../.env" })

const projectSeed = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("db Connented")
        const ProjectResult = await Projects.findOne()
        if (ProjectResult) {
            console.log("ProjectResult Already Exist")
            process.exit()
        }
        await Projects.create({
            title: "PORTFOLIO WEB APP",
            description: "Real-time chat application built with React and Socket.IO with user authentication and message storage.",
            note: "Note: Hosted on Render (free tier). Initial load may take a few seconds due to server cold start.",
            image: "/project2.jpg",
            tags: "Node.js",
            liveLink: "#",
            githubLink: "#",
        })
        console.log("Project Seed done")
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit()
    }
}
projectSeed()