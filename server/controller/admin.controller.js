const Admin = require("../modal/Admin.js")
const Experience = require("../modal/Experience.js")
const Projects = require("../modal/Projects.js")
const Skills = require("../modal/Skills.js")
const Portfolio = require("./../modal/Portfoli.js")
const { cloudinary } = require("../utils/uploader.js")


//  hero section get controller 
exports.getPortfolio = async (req, res) => {
    try {
        const PResult = await Portfolio.findOne()

        res.status(200).json({ message: "Portfolio Data fetch Success", PResult })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


//  skill section get controller 
exports.getSkill = async (req, res) => {
    try {
        console.log("aaaa")
        const SResult = await Skills.find()
        res.status(200).json({ message: "Skill Data fetch Success", SResult })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



//  project section get controller 
exports.getProject = async (req, res) => {
    try {
        const PResult = await Projects.find()
        res.status(200).json({ message: "Project Data fetch Success", PResult })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



//  Experience section get controller 
exports.getExperince = async (req, res) => {
    try {
        const EResult = await Experience.find()
        res.status(200).json({ message: "Experinece Data fetch Success", EResult })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



// create Portfolio controller 
exports.createPortfolio = async (req, res) => {
    try {
        const Portfolioresult = await Portfolio.create(req.body)
        res.status(200).json({ message: "Portfolio Details Create Success", Portfolioresult })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



// experience create controller
exports.createExp = async (req, res) => {
    try {
        const Expresult = await Experience.create(req.body)
        res.status(200).json({ message: "Experience Details Create Success", Expresult })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}




// Skill  create controller
exports.createSkill = async (req, res) => {
    try {
        const Skillresult = await Skills.create(req.body)
        res.status(200).json({ message: "Skill Details Create Success", Skillresult })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



// Project  create controller
exports.createProject = async (req, res) => {
    try {
        const file = req.file
        console.log("create - project", file)
        if (!file) {
            return res.status(400).json({ message: "Image required" })
        }
        // Upload to cloudinary
        const result = await cloudinary.uploader.upload(file.path, {
            folder: "projects"
        })
        const newProject = await Projects.create({
            title: req.body.title,
            description: req.body.description,
            note: req.body.note,
            image: result.secure_url,
            tags: req.body.tags,
            liveLink: req.body.liveLink,
            githubLink: req.body.githubLink
        })
        res.json(newProject)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Upload failed" })
    }
}




// hero section update controller 
exports.updatePortfolio = async (req, res) => {
    try {
        const { pid } = req.params
        const existingPortfolio = await Portfolio.findById(pid)
        if (!existingPortfolio) {
            return res.status(404).json({ message: "Portfolio not found" })
        }

        const updateData = { ...req.body }

        if (req.files) {
            if (req.files.profileImage) {
                const result = await cloudinary.uploader.upload(req.files.profileImage[0].path, {
                    folder: "portfolio/profiles",
                    resource_type: "image"
                })
                updateData.profileImage = result.secure_url
            }
            if (req.files.resume) {
                const result = await cloudinary.uploader.upload(req.files.resume[0].path, {
                    folder: "portfolio/resumes",
                    resource_type: "raw",
                    public_id: `Dilip_Resume.pdf`, // Force PDF extension for raw storage
                    use_filename: false,
                    unique_filename: false,
                    overwrite: true
                })
                // Since this is a raw resource, it doesn't support fl_attachment transformation.
                // Cloudinary will serve it with Content-Type: application/octet-stream or application/pdf
                // and the filename will be Dilip_Resume.pdf because of the public_id.
                updateData.resume = result.secure_url
            }
        }

        const finalUpdate = {
            hero: {
                name: req.body.name || existingPortfolio.hero.name,
                title: req.body.title || existingPortfolio.hero.title,
                profileImage: updateData.profileImage || existingPortfolio.hero.profileImage,
                resume: updateData.resume || existingPortfolio.hero.resume
            }
        }

        await Portfolio.findByIdAndUpdate(pid, finalUpdate)
        res.status(200).json({ message: "Portfolio update" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



// skill section update controller
exports.updateSkill = async (req, res) => {
    try {
        const { sid } = req.params
        await Skills.findByIdAndUpdate(sid, req.body)
        res.status(200).json({ message: "Skill update" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



// project section update controller
exports.updateProject = async (req, res) => {
    try {
        const { pid } = req.params
        const updateData = { ...req.body }

        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "projects"
            })
            updateData.image = result.secure_url
        }

        await Projects.findByIdAndUpdate(pid, updateData)
        res.status(200).json({ message: "Project update" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



// Experience section update controller
exports.updateExperience = async (req, res) => {
    try {
        const { eid } = req.params
        await Experience.findByIdAndUpdate(eid, req.body)
        res.status(200).json({ message: "Update Experience update" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


// delete Portfolio Controller
exports.deletePortfolio = async (req, res) => {
    try {
        const { pid } = req.params
        await Portfolio.findByIdAndDelete(pid)
        res.status(200).json({ message: "Portfolio deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message })

    }

}
// delete exp Controller
exports.deleteExp = async (req, res) => {
    try {
        const { eid } = req.params
        await Experience.findByIdAndDelete(eid)
        res.status(200).json({ message: "Exp deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message })

    }

}
// delete Skill Controller
exports.deleteSkill = async (req, res) => {
    try {
        const { sid } = req.params
        await Skills.findByIdAndDelete(sid)
        res.status(200).json({ message: "Skill deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message })

    }

}
// delete Project Controller
exports.deleteProject = async (req, res) => {
    try {
        const { pid } = req.params
        await Projects.findByIdAndDelete(pid)
        res.status(200).json({ message: "Project deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message })

    }

}