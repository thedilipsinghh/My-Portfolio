const mongoose = require("mongoose")

module.exports = mongoose.model("Portfolio", new mongoose.Schema({
    hero: {
        name: String,
        title: String,
        profileImage: String,
        resume: String,
    },

    about: {
        description1: String,
        description2: String
    },

    stats: {
        yearsExperience: Number,
        projectsCompleted: Number,
        technologies: Number,
        happyClients: Number
    },

    contact: {
        email: String,
        phone: String,
        location: String
    },

    social: {
        github: String,
        linkedin: String,
        twitter: String,
        instagram: String
    },
}, { timestamps: true }))