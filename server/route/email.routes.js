const { sendContactMessage } = require("../controller/email.controller")

const router = require("express").Router()

router.post("/contact-message", sendContactMessage)

module.exports = router