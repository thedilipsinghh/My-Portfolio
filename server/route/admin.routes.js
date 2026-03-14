const { getPortfolio, createPortfolio, updatePortfolio, deletePortfolio, getSkill, getExperince, getProject, updateSkill, updateExperience, updateProject, createSkill, createExp, deleteSkill, deleteExp, deleteProject, createProject } = require("../controller/admin.controller.js")

const router = require("express").Router()

router.get("/info-get", getPortfolio)
    .post("/info-create", createPortfolio)
    .put("/info-modify/:pid", updatePortfolio)
    .delete("/info-remove/:pid", deletePortfolio)

    .post("/info-create-skill", createSkill)
    .post("/info-create-exp", createExp)
    .post("/info-create-project", createProject)
    .get("/info-skill", getSkill)
    .get("/info-exp", getExperince)
    .get("/info-project", getProject)
    .put("/info-up-skill/:sid", updateSkill)
    .put("/info-up-exp/:eid", updateExperience)
    .put("/info-up-project/:pid", updateProject)
    .delete("/info-remove-skill/:sid", deleteSkill)
    .delete("/info-remove-exp/:eid", deleteExp)
    .delete("/info-remove-project/:pid", deleteProject)
module.exports = router