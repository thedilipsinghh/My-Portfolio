const nodemailer = require("nodemailer")

exports.sendContactMessage = async (req, res) => {
    try {

        const { name, email, subject, message } = req.body

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS
            }
        })

        // 📩 Mail to me
        const adminMail = {
            from: email,
            to: process.env.EMAIL,
            subject: `Portfolio Contact: ${subject}`,
            html: `
        <h2>New Portfolio Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `
        }

        // 📩 Auto reply to client
        const clientMail = {
            from: process.env.EMAIL,
            to: email,
            subject: "Thanks for contacting me",
            html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for contacting me through my portfolio.</p>

        <p>I have received your message and will get back to you as soon as possible.</p>

        <br/>

        <p><b>Your message:</b></p>
        <p>${message}</p>

        <br/>

        <p>Best Regards</p>
        <p><b>Dilip Singh</b></p>
        <p>MERN Stack Developer</p>
      `
        }

        await transporter.sendMail(adminMail)
        await transporter.sendMail(clientMail)

        res.status(200).json({
            message: "Message sent successfully"
        })

    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }
}