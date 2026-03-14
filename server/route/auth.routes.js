const { loginAdmin, AdminLogout } = require("../controller/auth.controller.js")

const router = require("express").Router()

router
    .post("/admin-signin", loginAdmin)
    .post("/admin-signout", AdminLogout)

module.exports = router