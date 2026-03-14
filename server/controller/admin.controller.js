const Admin = require("../modal/Admin.js")
const Experience = require("../modal/Experience.js")
const Projects = require("../modal/Projects.js")
const Skills = require("../modal/Skills.js")
const Portfolio = require("./../modal/Portfoli.js")


//  hero section get controller 
exports.getPortfolio = async (req, res) => {
    try {
        const PResult = await Portfolio.findOne()
        console.log(PResult)
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
        console.log(SResult)
        res.status(200).json({ message: "Skill Data fetch Success", SResult })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



//  project section get controller 
exports.getProject = async (req, res) => {
    try {
        const PResult = await Projects.find()
        console.log(PResult)
        res.status(200).json({ message: "Project Data fetch Success", PResult })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



//  Experience section get controller 
exports.getExperince = async (req, res) => {
    try {
        const EResult = await Experience.find()
        console.log(EResult)
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
        const Projectresult = await Projects.create(req.body)
        res.status(200).json({ message: "Project Details Create Success", Projectresult })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}




// hero section update controller 
exports.updatePortfolio = async (req, res) => {
    try {
        const { pid } = req.params
        await Portfolio.findByIdAndUpdate(pid, req.body)
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
        await Projects.findByIdAndUpdate(pid, req.body)
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